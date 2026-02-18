import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';


const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        primary:{
          color: '{violet.500}',
          inverseColor: '#ffffff',
          hoverColor: '{violet.700}',
          activeColor: '{violet.800}'
        },
        formField:{
          hoverBorderColor: '{primary.color}',
        },
        focusRing: {
          width: '2px',
          style: 'dashed',
          color: '{primary.color}',
          offset: '1px'
        }
      },
      dark: {
      surface: {
        50: '{zinc.50}',
        100: '{zinc.100}',
        200: '{zinc.200}',
        300: '{zinc.300}',
        400: '{zinc.400}',
        500: '{zinc.500}',
        600: '{zinc.600}',
        700: '{zinc.700}',
        800: '{zinc.800}',
        900: '{zinc.900}',
        950: '{zinc.950}'
      },
        primary:{
          color: '{slate.300}',
          inverseColor: '#ffffff',
          hoverColor: '{slate.500}',
          activeColor: '{slate.600}'
        }
      },
      formField:{
        hoverBorderColor: '{primary.color}'
      },
      focusRing: {
        width: '2px',
        style: 'dashed',
        color: '{primary.color}',
        offset: '1px'
      }
    },
    },
});

export default MyPreset;
