export function getSkillStyle(skill: string) {
  let hash = 0;
  for (let i = 0; i < skill.length; i++) {
    hash = skill.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  // Adjusted saturation to 55% and lightness to 55% for a softer, more elegant look
  return {
    color: `hsl(${h}, 55%, 55%)`,
    backgroundColor: `hsla(${h}, 55%, 55%, 0.12)`,
  };
}
