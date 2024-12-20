import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [color, setColor] = useState('');
  const [formData, setFormData] = useState(false);

  const interestChangeHandler = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    if (name && address && gender && interests.length > 0 && color) {
      setFormData(true);
    }
  };

  return (
    <>
      <h1>User Profile Form</h1>
      <form onSubmit={submitButtonHandler}>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="addressInput">Address:</label>
        <br />
        <textarea
          name=""
          id="addressInput"
          cols="40"
          rows="5"
          onChange={(event) => setAddress(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="">Gender:</label>
        <br />
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{' '}
        Female
        <br />
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{' '}
        Male <br />
        <input
          type="radio"
          value="Others"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{' '}
        Others <br />
        <br />
        <label htmlFor="">Interests:</label>
        <br />
        <input
          type="checkbox"
          value="Reading"
          onChange={interestChangeHandler}
        />{' '}
        Reading <br />
        <input
          type="checkbox"
          value="Singing"
          onChange={interestChangeHandler}
        />{' '}
        Singing <br />
        <input
          type="checkbox"
          value="Painting"
          onChange={interestChangeHandler}
        />{' '}
        Painting <br />
        <br />
        <label htmlFor="colorSelect">Favourite Color:</label>
        <select
          id="colorSelect"
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <>
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests : {interests.join(', ')}</p>
          <p>Favourite Color: {color}</p>
        </>
      )}
    </>
  );
}
