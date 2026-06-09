"use client";

export interface EventModel {
  id: string;
  title: string;
  sub_title: string;
  category: string;
  description: string;
  event_date: string;
  location_name: string;
  max_capacity: number;
  current_occupancy: number;
  price_monetary: number;
  is_featured?: boolean;
  itinerary?: { time: string; title: string; desc: string }[];
  requirements?: string[];
  image: string;
}

export interface ProfileModel {
  id: string;
  warrior_name: string;
  dojo_name: string;
  current_rank: string;
  is_external: boolean;
  email: string;
}

export interface RegistrationModel {
  id: string;
  user_id: string;
  event_id: string;
  registered_at: string;
}

// Initial Events Mock data
const DEFAULT_EVENTS: EventModel[] = [
  {
    id: "zen-garden-design",
    title: "Zen Garden Design",
    sub_title: "Math & Spiritual Philosophy",
    category: "Zen Living",
    description: "Learn the mathematical precision and spiritual philosophy behind traditional rock garden composition.",
    event_date: "November 12, 2026",
    location_name: "Dojo 4",
    max_capacity: 30,
    current_occupancy: 6,
    price_monetary: 15000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuDB_plZ_tVLfPU0iLs5ZwjQ9ziVIKw-_U4R4FeimHHZkWwVGo-FZ_gnuS-ASK-i7Q3q9C5oHN_sY6AgjXUmDLwsJW6fZwpKd43eK0IR-Gf-XMjNu1MbHr75NjCp5_YZOFDGlkhoa6x8QHxrLgVqJY-s-GEmpVXZtP9SS50mxXLgvWJpBHlXdHPPVaeKT9mi9PoXDculvUgWeWWVY5TMgRBHAYYLIYTWLkCJ7zr1BJdz6aLHHCcgLM-ASYwhM629IFMTgBjCuLRXM",
    itinerary: [
      { time: "09:00 AM — 11:00 AM", title: "Opening Ceremony", desc: "Traditional blessing of the Dojo and a demonstration of Iaidō by Grandmaster Saitō." },
      { time: "11:30 AM — 03:00 PM", title: "Masterclass: The First Cut", desc: "Hands-on instruction focusing on grip, stance, and fundamental strike mechanics." },
      { time: "04:00 PM — 06:00 PM", title: "Guided Sparring", desc: "Controlled Bokken sessions to practice defensive maneuvers and reactive timing." }
    ],
    requirements: [
      "Minimum age of 18 or parental consent for minors.",
      "Comfortable, flexible dark clothing (Hakama optional).",
      "Mental readiness for silence and focused breathing."
    ]
  },
  {
    id: "katana-crafting-workshop",
    title: "Katana Crafting Workshop",
    sub_title: "Forging Masamune-style Blades",
    category: "Martial Arts",
    description: "An intensive weekend masterclass on the forging techniques of Masamune-style blades.",
    event_date: "November 24, 2026",
    location_name: "Dojo 2",
    max_capacity: 15,
    current_occupancy: 11,
    price_monetary: 85000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJRzS8juVqud7zMVScdEQ3cvQ7EOkwlBabjIXGrQOYZVv51BYlTBA5FGHh1fjVNRS1Cr-oZfhrgOfKtbIxsl9WaLDlEMiOo-qDZMJK113n60U8OGpoXDqRDxFW7sbIJKk78Vk10iFhYVl4a_VDwKp45ECA7FPuRLkWE2svz8UnxVCIZiEvJUd_RUTOhoiplEURwhZG67VZhREq53wvPqgAElQ78DL2Hw5MGnWUeY4gh0zx89OuXhCbWyFGGXT1AlcB7jlm2GfTTw",
    itinerary: [
      { time: "08:00 AM — 10:00 AM", title: "Fire & Steel", desc: "Introduction to metallurgy and high-temperature coal heating." },
      { time: "10:30 AM — 01:00 PM", title: "Hammering Technique", desc: "Rhythmic hammer strokes for blade folding." }
    ],
    requirements: [
      "Protective leather gear (provided).",
      "No previous experience required, but heavy stamina expected."
    ]
  },
  {
    id: "haiku-night",
    title: "Haiku Night",
    sub_title: "Moonlight Poetry & Brush Painting",
    category: "Art & Calligraphy",
    description: "A curated evening of poetry, sake tasting, and live brush-painting by moonlight.",
    event_date: "December 05, 2026",
    location_name: "Tokaido Room",
    max_capacity: 40,
    current_occupancy: 22,
    price_monetary: 8000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmSpUcwtxm7NtfBmy4CPZBSfwyuWZUD9tJKe3RV8vkbzGgr45n0axox4S_dZCynnb9nLUMypNi8KBEHuZWpBNsBFjZZqC4xDpynwH35A4JUE4Qa82E2oJeFkOvLFcInmzpXXjS2G8EubffXN1J7dAQa7ZuQZ8YNN_YXP6Ra7a-qNreoqax4Kj6RGB-zbnzt_p7aN9cJOVh1nptSfGia0tPm4ymOZgNsojFrPtjdu0Ivn7_S4Jc8kpMUMZSRx1wU4PC6kCe6aM-G_c",
    itinerary: [
      { time: "06:00 PM — 08:00 PM", title: "Sake & Syllables", desc: "Learn structure of traditional tanka and haiku." },
      { time: "08:30 PM — 10:00 PM", title: "Ink Brush Moonlight Sessions", desc: "Sumie painting guided by moon illumination." }
    ],
    requirements: [
      "Open to all. Bring a small writing ledger."
    ]
  },
  {
    id: "kintsugi-workshop",
    title: "Kintsugi Workshop",
    sub_title: "The Beauty in Scars",
    category: "Art & Calligraphy",
    description: "A private workshop on gold-joinery pottery repair. Limited to 5 disciples.",
    event_date: "December 12, 2026",
    location_name: "Zen Studio",
    max_capacity: 5,
    current_occupancy: 4,
    price_monetary: 25000,
    is_featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz-EzcFeluV7ClP7r1bLr_QDC9pOYH_kdx3FJhd7eE_vcrDwRhRhPUdIbQC0Q4EmtivCeyfS4hD0FogojoIrsS7EyNHeM0XdSulnfL_3mcDO2C8bwUvtj1nl8isB5d3KXrJxzv-rFQs0h70-I-2JoA4WcaD0ED4lMCv--swQJU7xVGnBo74dNU56n2GFjasQCMhumfSTOzR3UbroMcI07JYxDAxJKioaHgV-5pci_9IsNYvJlniHFbpBF8496ppLsQALfmwnMKqkE",
    itinerary: [
      { time: "10:00 AM — 12:00 PM", title: "Understanding Fracture", desc: "Mapping stress fractures in broken tea bowls." },
      { time: "01:00 PM — 04:00 PM", title: "Applying Gold Lacquer", desc: "Repairing joints with genuine urushi and gold powder." }
    ],
    requirements: [
      "A steady hand and patience.",
      "You can bring your own broken pottery or use our bowls."
    ]
  }
];

class StateStore {
  private listeners: (() => void)[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.initStore();
      this.setupDebugHook();
    }
  }

  private initStore() {
    if (!localStorage.getItem("bushido_events")) {
      localStorage.setItem("bushido_events", JSON.stringify(DEFAULT_EVENTS));
    }
    if (!localStorage.getItem("bushido_registrations")) {
      localStorage.setItem("bushido_registrations", JSON.stringify([]));
    }
  }

  public getEvents(): EventModel[] {
    if (typeof window === "undefined") return DEFAULT_EVENTS;
    const ev = localStorage.getItem("bushido_events");
    return ev ? JSON.parse(ev) : DEFAULT_EVENTS;
  }

  public getEvent(id: string): EventModel | undefined {
    return this.getEvents().find(e => e.id === id);
  }

  public getProfile(): ProfileModel | null {
    if (typeof window === "undefined") return null;
    const prof = localStorage.getItem("bushido_profile");
    return prof ? JSON.parse(prof) : null;
  }

  public getRegistrations(): RegistrationModel[] {
    if (typeof window === "undefined") return [];
    const regs = localStorage.getItem("bushido_registrations");
    return regs ? JSON.parse(regs) : [];
  }

  public setAuth(warriorName: string, dojoName: string, email: string, rank: string, isExternal: boolean) {
    const profile: ProfileModel = {
      id: "warrior-1",
      warrior_name: warriorName || "Miyamoto Musashi",
      dojo_name: dojoName || "The Tenshin Shoden Katori Shinto-ryu",
      email: email || "warrior@bushido.jp",
      current_rank: rank || "Novice",
      is_external: isExternal
    };
    localStorage.setItem("bushido_profile", JSON.stringify(profile));
    this.notify();
  }

  public signout() {
    localStorage.removeItem("bushido_profile");
    this.notify();
  }

  public registerEvent(eventId: string) {
    const profile = this.getProfile();
    if (!profile) return false;

    const events = this.getEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return false;

    // Check if already registered
    const regs = this.getRegistrations();
    if (regs.some(r => r.user_id === profile.id && r.event_id === eventId)) {
      return true; // Already registered
    }

    if (event.current_occupancy >= event.max_capacity) {
      return false; // Full
    }

    // Register
    event.current_occupancy += 1;
    localStorage.setItem("bushido_events", JSON.stringify(events));

    const newReg: RegistrationModel = {
      id: Math.random().toString(36).substring(7),
      user_id: profile.id,
      event_id: eventId,
      registered_at: new Date().toISOString()
    };
    regs.push(newReg);
    localStorage.setItem("bushido_registrations", JSON.stringify(regs));

    this.notify();
    return true;
  }

  public isRegistered(eventId: string): boolean {
    const profile = this.getProfile();
    if (!profile) return false;
    return this.getRegistrations().some(r => r.user_id === profile.id && r.event_id === eventId);
  }

  public resetState() {
    localStorage.setItem("bushido_events", JSON.stringify(DEFAULT_EVENTS));
    localStorage.setItem("bushido_registrations", JSON.stringify([]));
    localStorage.removeItem("bushido_profile");
    this.notify();
  }

  // Listener pattern
  public subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l());
    this.setupDebugHook(); // Keep debug state updated
  }

  private setupDebugHook() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__bushidoDebugState = {
        getEvents: () => this.getEvents(),
        getProfile: () => this.getProfile(),
        getRegistrations: () => this.getRegistrations(),
        setAuth: (isExternal: boolean) => {
          this.setAuth(
            isExternal ? "External Ally" : "Imperial Warrior",
            isExternal ? "Allied Clan Dojo" : "Imperial College Dojo",
            isExternal ? "ally@shogun.jp" : "warrior@bushido.jp",
            "Shodan (1st Degree)",
            isExternal
          );
        },
        registerEvent: (eventId: string) => this.registerEvent(eventId),
        resetState: () => this.resetState()
      };
    }
  }
}

export const store = new StateStore();
