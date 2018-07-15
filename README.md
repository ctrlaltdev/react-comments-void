# Comment into the void
This is a react component to add a comment section with a slight particularity: there is no back-end. no database. You can only see your own comments.

## "L'enfer, c'est les autres" - Sartre
("Hell is other people")  

This react component is a statement and wasn't really created to solve an existing problem, though I'd love to it used on websites.

## Usage
First add the component to your dependencies:  
`npm i -S react-comments-void` or `yarn add react-comments-void`

Then use the component in your code:  
```
...

import HellIsOtherPeople from 'react-comments-void'

...

ReactDOM.render(
  <HellIsOtherPeople />,
  document.getElementById('root')
)

...
```