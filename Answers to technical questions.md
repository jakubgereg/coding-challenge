1. I spend around 3h on this test. **These are couple of improvements I would do:**

   * I would add pagination to restaurant finder (since its returning only results from first page of API)
   * I would add autocomplete to search or list of Canadian cities, this could make it easier to search for end users.
   * I would add detection of client location so we can show them restaurants from where he currently is located.
   * I would definitely style it better :)
   * Also I would add ability to view restaurant details (because there are more data to show about each restaurant)

2. Some of the ES6 features I`ve used

**Template literals**
```js
fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
```
**repeat() method**
```js
export function makeDollarSigns (priceCategory){
  return '$'.repeat(priceCategory)
}
```

**Spread Syntax**
```js
const wrapper = shallow(<RestaurantComponent {...props} />)
```

3. I would track performance issue by using React Profiler. Then apply some optimalization steps like using debounce.

4. There could be exposed some more query parameters to this API so we could (sorting and filtering)

5. This is me
```json
{
  "firstName":"Jakub",
  "lastName" : "Gereg",
  "occupation" : "Software Engineer",
  "gender": "Male",
  "age": 28,
  "location": "Toronto",
  "hobies": [
    "Traveling",
    "Jumping out of planes",
    "Learning new cool stuff with React",
    "Fitness"
  ],
  "skills":[
    "React",
    "MongoDB",
    "JavaScript",
    "C#",
    ".NET"
  ],
  "motto": "A good laugh is sunshine in the house."
}
```