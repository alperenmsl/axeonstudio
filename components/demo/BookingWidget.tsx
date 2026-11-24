"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { barbers, services } from "@/lib/demo/barbershop";

const times = ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];
type Day = { wd: string; dm: string };

export function BookingWidget() {
  const [days, setDays] = useState<Day[]>([]);
  const [svc, setSvc] = useState(0);
  const [barber, setBarber] = useState(0); // 0 = egal
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const out: Day[] = [];
    const d = new Date();
    while (out.length < 6) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0) {
        out.push({
          wd: d.toLocaleDateString("de-AT", { weekday: "short" }),
          dm: d.toLocaleDateString("de-AT", {
            day: "2-digit",
            month: "2-digit",
          }),
        });
      }
    }
    setDays(out);
  }, []);

  const taken = (di: number, t: string) =>
    (di * 3 + times.indexOf(t)) % 4 === 0;
  const label =
    "mb-3 text-xs font-bold tracking-[0.25em] text-[#d19a5b] uppercase";
  const opt = (active: boolean, off = false) =>
    `rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
      off
        ? "cursor-not-allowed border-white/5 text-white/20 line-through"
        : active
          ? "border-[#d19a5b] bg-[#d19a5b] text-black"
          : "border-white/12 text-[#efe7d8] hover:border-[#d19a5b]/60"
    }`;

  const summary = [
    services[svc].name,
    barber === 0 ? "Barber egal" : barbers[barber - 1].name,
    day !== null && days[day]
      ? `${days[day].wd} ${days[day].dm}`
      : "Tag wählen",
    time ?? "Uhrzeit wählen",
  ];

  if (done) {
    return (
      <div className="rounded-3xl border border-[#d19a5b]/30 bg-[#151412] p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d19a5b] text-black">
          <Check size={26} />
        </span>
        <h3 className="mt-5 font-serif text-3xl font-bold text-[#efe7d8]">
          Termin vorgemerkt
        </h3>
        <p className="mt-2 text-[#efe7d8]/70">{summary.join(" · ")}</p>
        <p className="mx-auto mt-4 max-w-sm text-xs text-[#efe7d8]/45">
          Demo: In einer echten Seite folgt jetzt eine Bestätigung per E-Mail,
          und der Termin erscheint im Kalender des Salons.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setDay(null);
            setTime(null);
          }}
          className="mt-6 text-sm font-semibold text-[#d19a5b] underline"
        >
          Nochmal ausprobieren
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-[#151412] p-6 sm:p-8">
        <p className={label}>1 · Leistung</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {services.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSvc(i)}
              className={`rounded-xl border p-3 text-left transition ${svc === i ? "border-[#d19a5b] bg-[#d19a5b]/10" : "border-white/12 hover:border-[#d19a5b]/60"}`}
            >
              <span className="block text-sm font-bold text-[#efe7d8]">
                {s.name}
              </span>
              <span className="text-xs text-[#efe7d8]/55">
                {s.price} · {s.min} Min.
              </span>
            </button>
          ))}
        </div>

        <p className={`${label} mt-7`}>2 · Barber</p>
        <div className="flex flex-wrap gap-2">
          {["Egal", ...barbers.map((b) => b.name)].map((n, i) => (
            <button
              key={n}
              type="button"
              onClick={() => setBarber(i)}
              className={opt(barber === i)}
            >
              {n}
            </button>
          ))}
        </div>

        <p className={`${label} mt-7`}>3 · Tag</p>
        <div className="flex flex-wrap gap-2">
          {days.map((d, i) => (
            <button
              key={d.dm}
              type="button"
              onClick={() => {
                setDay(i);
                setTime(null);
              }}
              className={opt(day === i)}
            >
              {d.wd} <span className="opacity-70">{d.dm}</span>
            </button>
          ))}
        </div>

        <p className={`${label} mt-7`}>4 · Uhrzeit</p>
        <div className="flex flex-wrap gap-2">
          {times.map((t) => {
            const off = day === null || taken(day, t);
            return (
              <button
                key={t}
                type="button"
                disabled={off}
                onClick={() => setTime(t)}
                className={opt(time === t, off)}
              >
                {t}
              </button>
            );
          })}
        </div>
        {day === null && (
          <p className="mt-3 text-xs text-[#efe7d8]/45">
            Bitte zuerst einen Tag wählen.
          </p>
        )}
      </div>

      <aside className="h-fit rounded-3xl border border-[#d19a5b]/25 bg-gradient-to-b from-[#1d1a16] to-[#12100e] p-6 sm:p-8 lg:sticky lg:top-24">
        <p className={label}>Ihr Termin</p>
        <ul className="space-y-3 text-[#efe7d8]">
          {summary.map((s, i) => (
            <li
              key={i}
              className={
                i > 1 && s.includes("wählen") ? "text-[#efe7d8]/40" : ""
              }
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-white/10 pt-4 font-serif text-3xl font-bold text-[#d19a5b]">
          {services[svc].price}
        </p>
        <button
          type="button"
          disabled={day === null || !time}
          onClick={() => setDone(true)}
          className="mt-6 w-full rounded-full bg-[#b3261e] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Termin buchen
        </button>
      </aside>
    </div>
  );
}
