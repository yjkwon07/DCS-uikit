# DCS-uikit

Design Component System - uikit

<div align="center">
  <img height=300 src="https://user-images.githubusercontent.com/31876632/142755109-99ef00fe-c3a1-4999-91c5-458fae57986e.png" />
</div>
<br/>

- Design Component System
- 반복된 컴포넌트들을 카테고리화 하고, 디자인하여 컴포넌트를 통해 재사용성 높임
- 태그가 명시화가 되어, 코드가 직관적이면서, 사용하는 목적을 알 기가 편해짐

  - Switch(Toggle), Input, Button, Tab, Select, Radio....
  
  ```html
    <input type="checkbox"> => Checkbox Component Design => <CheckBox>
    <input type="radio"> =>  Radio Component Design => <Radio>
  ```

## Start

storybook

```
npm i
npm run storybook
```

build

```
npm run build
```

# Main lib. description

## tailwindcss

- [document](https://tailwindcss.com/docs/installation)

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

## Emotion

- [document](https://emotion.sh/docs/introduction)

The primary way to style elements with emotion is the `css` prop. It provides a concise and flexible API to style your components.

- Change the rendered tag using  `withComponent`
- Targeting another emotion component
- Customizing prop forwarding
- Composing dynamic styles
-  `as`  prop
- Nesting components: `&`

Composition is one of the most powerful and useful patterns in Emotion. You can compose styles together by interpolating value returned from `css` in another style block.

- [media query (facepaint)](https://emotion.sh/docs/media-queries#facepaint)
- [package-summary](https://emotion.sh/docs/package-summary)
- [keyframes](https://emotion.sh/docs/keyframes)
- [tsconfig](https://emotion.sh/docs/typescript)
- [With the old JSX transform](https://emotion.sh/docs/typescript)

## twin.macro 

- [document](https://github.com/ben-rogerson/twin.macro)

Twin blends the magic of Tailwind with the flexibility of css-in-js

## headlessui

- [document](https://headlessui.dev/)

Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

## Styled-system

- [document](https://styled-system.com/api#layout)

Styled System is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties.

To use Styled System, install a CSS-in-JS library such as  [Styled Components](https://github.com/styled-components/styled-components)  or  [Emotion](https://github.com/emotion-js/emotion).

## Rollup

- [document](https://rollupjs.org/guide/en/)

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.