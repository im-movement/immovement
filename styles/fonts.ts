import { Oswald, Inter, Roboto_Mono } from 'next/font/google';
// import localFont from 'next/font/local';

// // define your variable fonts
const inter = Inter({ subsets: ['latin'] });
// const lora = Lora();
const oswald = Oswald({ weight: '200', subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: '200', subsets: ['latin'] });
// // define 2 weights of a non-variable font
// // const sourceCodePro400 = Source_Sans_3({ weight: '400' });
// // const sourceCodePro700 = Source_Sans_3({ weight: '700' });
// // define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// // const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' });

export {
  inter,
  // lora,
  oswald,
  robotoMono,
  // sourceCodePro400, sourceCodePro700, greatVibes
};
