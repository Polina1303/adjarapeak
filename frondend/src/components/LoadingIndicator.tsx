import { LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

const PAGE_LOADING_TEXT = {
  RU: "Загружаем страницу…",
  EN: "Loading page…",
  GE: "გვერდი იტვირთება…",
} as const;

export function Spinner({
  className,
  label = "Загрузка…",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span role="status" aria-label={label} className="inline-flex items-center justify-center">
      <LoaderCircle aria-hidden="true" className={cn("h-5 w-5 animate-spin text-ember", className)} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function PageLoading({ label }: { label?: string }) {
  const { lang } = useLanguage();
  const actualLabel = label ?? PAGE_LOADING_TEXT[lang];

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4" aria-live="polite">
      <div className="flex flex-col items-center gap-3 text-center text-muted-foreground">
        <Spinner className="h-9 w-9" label={actualLabel} />
        <p className="font-body text-sm">{actualLabel}</p>
      </div>
    </div>
  );
}

export function LoadingImage({ className, onLoad, onError, src, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    setLoading(!(image?.complete && image.naturalWidth > 0));
  }, [src]);

  return (
    <>
      {loading && (
        <span className="absolute inset-0 z-[1] flex items-center justify-center bg-muted/35" aria-hidden="true">
          <LoaderCircle className="h-7 w-7 animate-spin text-ember" />
        </span>
      )}
      <img
        {...props}
        ref={imageRef}
        src={src}
        onLoad={(event) => {
          setLoading(false);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoading(false);
          onError?.(event);
        }}
        className={cn("transition-opacity duration-200", loading && "opacity-0", className)}
      />
    </>
  );
}
