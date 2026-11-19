// lib/data/ball-valve-product-details.ts

export interface BallValveProductDetail {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  material: string;
  details: {
    types: string;
    sizes: string;
    material: string;
  };
}

export const ballValveProductDetails: Record<string, BallValveProductDetail> = {
  "ball-valve-stem-pin": {
    slug: "ball-valve-stem-pin",
    name: "Ball Valve Stem Pin",
    image: "/images/ball-valve/ball-valve-stem-pin.webp",
    imageAlt: "Ball Valve Stem Pin",
    material: "AISI 304/304L, AISI 316/316L, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex",
    details: {
      types:
        "1PC, 2PC, 3PC, Screwed End, Forged Steel, Extended, Flush Bottom, Trunion, Antistatic etc.",
      sizes: '3/8" to 12"',
      material: "AISI 304/304L, AISI 316/316L, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex",
    },
  },
  "valve-balls": {
    slug: "valve-balls",
    name: "Metallic - Ball Valve Balls",
    image: "/images/ball-valve/ball-valve-ball.webp",
    imageAlt: "Ball Valve Balls",
    material: "AISI 304/304L, AISI 316/316L, AISI 420/420C, AISI 440C, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex, Stellite",
    details: {
      types: "2 Way, L Port, T Port, FB, RB etc.",
      sizes: '3/8" to 4" & As per Customer Requirement',
      material: "AISI 304/304L, AISI 316/316L, AISI 420/420C, AISI 440C, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex, Stellite",
    },
  },
  "ceramic-valve-balls": {
    slug: "ceramic-valve-balls",
    name: "Ceramic - Ball Valve Balls",
    image: "/images/ball-valve/ceramic_ball.webp",
    imageAlt: "Ceramic - Ball Valve Balls",
    material: "Zirconia (ZrO2), Alumina Oxide (Al2O3)",
    details: {
      types: "Full Port, Reduced Port, V-Port, 2-Way, 3-Way",
      sizes: '1/2" to 8" & As per Customer Requirement',
      material: "Zirconia (ZrO2), Alumina Oxide (Al2O3)",
    },
  },
  "ball-valve-seat-rings": {
    slug: "ball-valve-seat-rings",
    name: "Ball Valve Seat Rings",
    image: "/images/ball-valve/ball-valve-seat-ring.webp",
    imageAlt: "Ball Valve Seat Rings",
    material: "As per customer requirements",
    details: {
      types: "As per customer requirements",
      sizes: '3/8" to 4" & As per Customer Requirement',
      material: "As per customer requirements",
    },
  },
};

export function getBallValveProductDetail(slug: string) {
  return ballValveProductDetails[slug];
}