import { useRef, useState } from "react";
import { Upload, X, ArrowUp, ArrowDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  value: string[];
  onChange: (v: string[]) => void;
};

export function GalleryField({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [urlDraft, setUrlDraft] = useState("");
  const items = Array.isArray(value) ? value : [];

  const upload = async (files: FileList) => {
    setUploading(true);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const ext = file.name.split(".").pop() || "jpg";
        const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error } = await supabase.storage
          .from("catalog-images")
          .upload(path, file, { cacheControl: "3600", upsert: false });
        if (error) throw error;
        const { data } = supabase.storage.from("catalog-images").getPublicUrl(path);
        uploaded.push(data.publicUrl);
      }
      onChange([...items, ...uploaded]);
      toast.success(`Загружено: ${uploaded.length}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Не удалось загрузить");
    } finally {
      setUploading(false);
    }
  };

  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const addUrl = () => {
    if (!urlDraft.trim()) return;
    onChange([...items, urlDraft.trim()]);
    setUrlDraft("");
  };

  return (
    <div className="space-y-3">
      {items.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((url, i) => (
            <div key={i} className="relative group border rounded overflow-hidden bg-muted">
              <img src={url} alt="" className="w-full h-32 object-cover" />
              <div className="absolute top-1 right-1 flex gap-1">
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  className="bg-background/90 rounded p-1 hover:bg-background"
                  title="Вверх"
                >
                  <ArrowUp className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={() => move(i, 1)}
                  className="bg-background/90 rounded p-1 hover:bg-background"
                  title="Вниз"
                >
                  <ArrowDown className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="bg-destructive text-destructive-foreground rounded p-1"
                  title="Удалить"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="absolute bottom-1 left-1 bg-background/80 text-xs px-1.5 rounded">
                #{i + 1}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <Input
          placeholder="https://… (добавить по URL)"
          value={urlDraft}
          onChange={(e) => setUrlDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addUrl();
            }
          }}
        />
        <Button type="button" variant="outline" size="sm" onClick={addUrl}>
          Добавить URL
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          <Upload className="h-4 w-4 mr-1" />
          {uploading ? "..." : "Загрузить"}
        </Button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) upload(e.target.files);
          e.target.value = "";
        }}
      />
      <p className="text-xs text-muted-foreground">
        Изображений: {items.length}. Можно загружать несколько файлов сразу.
      </p>
    </div>
  );
}