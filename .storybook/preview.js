import '../styles/app.css'; //genel uygulama için css'ler
import './style.css'; //storybook'a özel css'ler

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}