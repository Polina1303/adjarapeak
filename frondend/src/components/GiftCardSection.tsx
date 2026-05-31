import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addToCart } from "@/lib/cart";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import giftCard from "@/assets/gift-card.png";
import giftCardCart from "@/assets/gift-card-cart.png";
import giftCardMobile from "@/assets/gift-card-mobile.png";

const PRESETS = [50, 100, 200, 500];
const MIN_AMOUNT = 20;
const MAX_AMOUNT = 5000;

export function GiftCardSection() {
  const [selected, setSelected] = useState<number | "custom">(100);
  const [custom, setCustom] = useState("");
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.giftCard;

  const resolvedAmount =
    selected === "custom" ? Math.floor(Number(custom)) : selected;
  const isValid =
    Number.isFinite(resolvedAmount) &&
    resolvedAmount >= MIN_AMOUNT &&
    resolvedAmount <= MAX_AMOUNT;

  const handleAdd = () => {
    if (!isValid) {
      toast.error(text.invalidAmount(MIN_AMOUNT, MAX_AMOUNT));
      return false;
    }
    addToCart(1, `giftcard-${resolvedAmount}`, {
      title: text.cartTitle(resolvedAmount),
      image: giftCardCart,
      price: resolvedAmount,
      kind: "shop",
      unit: "",
    });
    toast.success(text.added(resolvedAmount));
    return true;
  };

  return (
    <section className="section-padding py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {text.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className="space-y-2 text-muted-foreground text-sm font-body mb-6">
              {text.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mb-4">
              <div className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">
                {text.chooseAmount}
              </div>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((amount) => {
                  const active = selected === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelected(amount)}
                      className={`px-4 py-2 rounded-lg font-body text-sm font-semibold border transition-colors ${
                        active
                          ? "bg-background text-ember border-ember"
                          : "bg-background text-foreground border-border hover:border-ember"
                      }`}
                    >
                      ₾{amount}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setSelected("custom")}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-semibold border transition-colors ${
                    selected === "custom"
                      ? "bg-background text-ember border-ember"
                      : "bg-background text-foreground border-border hover:border-ember"
                  }`}
                >
                  {text.customAmount}
                </button>
              </div>
            </div>

            {selected === "custom" && (
              <div className="mb-6 max-w-xs">
                <label className="block text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">
                  {text.enterAmount}
                </label>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={10}
                  placeholder={text.amountPlaceholder(MIN_AMOUNT, MAX_AMOUNT)}
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="text-muted-foreground"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={handleAdd}
                disabled={!isValid}
                className="gap-2 bg-ember text-ember-foreground hover:bg-ember/90 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Gift className="h-4 w-4" />
                {isValid ? text.addToCartAmount(resolvedAmount) : text.addToCart}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:order-2"
          >
            <img
              src={giftCardMobile}
              alt={text.imageAlt}
              loading="lazy"
              className="rounded-2xl w-full h-auto object-contain lg:hidden"
            />
            <img
              src={giftCard}
              alt={text.imageAlt}
              loading="lazy"
              className="rounded-2xl w-full h-80 object-contain hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
