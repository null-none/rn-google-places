# rn-google-places

Google Places autocomplete component for iOS and Android React-Native apps

## How to install

```bash
# Install via npm
npm install rn-google-places --save

# Install via yarn
yarn add rn-google-places
```

## How to use it

To use it, just import it directly into your components

```js
import AutocompletePlaces from 'rn-google-places'
```

## Example

The most basic example of this module is to use it like this : 

```js
import React from 'react'
import { View, Button } from 'react-native'
import AutocompletePlaces from 'rn-google-places'


const Example = (props = {}) => (
  <View>
    <AutocompletePlaces
      key="api key"
      place={(result) => {
        console.log(result);
      }}
    />
  </View>
)

export default Example
```
