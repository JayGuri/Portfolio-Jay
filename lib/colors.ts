// Exact football club colors
export const colors = {
  // Manchester United Red
  manUtdRed: '#DA020E', // Exact Man Utd red
  manUtdRedDark: '#A0000A',
  manUtdRedLight: '#FF1A2A',
  
  // Real Madrid Gold
  realMadridGold: '#FFD700', // Exact Real Madrid gold
  realMadridGoldDark: '#DAA520',
  realMadridGoldLight: '#FFE44D',
  
  // Base colors
  black: '#000000',
  white: '#FFFFFF',
  offWhite: '#F5F5F5',
  
  // Gradients
  gradients: {
    redToGold: 'linear-gradient(135deg, #DA020E 0%, #FFD700 100%)',
    goldToRed: 'linear-gradient(135deg, #FFD700 0%, #DA020E 100%)',
    blackToRed: 'linear-gradient(180deg, #000000 0%, #DA020E 100%)',
    redToBlack: 'linear-gradient(180deg, #DA020E 0%, #000000 100%)',
  },
} as const;

