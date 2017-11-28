import React from 'react';
import spriteSheet from 'Images/spritesheet.svg';

class App extends React.Component {
  render() {
    return (
      <div>

        <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
      </div>
    );
  }
}

export default App;
