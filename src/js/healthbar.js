export default function defineHealthCondition(charaterStats) {
  if (charaterStats.health > 50) {
    return 'healthy';
  } else if (charaterStats.health <= 50 && charaterStats.health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}