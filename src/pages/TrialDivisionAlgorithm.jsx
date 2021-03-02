import React, {useState} from 'react';

function TrialDivisionAlgorithm() {
  const [result, setResult] = useState(null);
  const [data, setData] = useState('');

  // Trial Division Algorithm
  // Function to check if a number is
  // a prime number or not
  const trialDivision = n => {
    // Initializing with the value 2
    // from where the number is checked
    let i = 2;

    // Computing the square root of
    // the number N
    let k = Math.ceil(Math.sqrt(n));

    // While loop till the
    // square root of N
    while (i <= k) {
      // If any of the numbers between
      // [2, sqrt(N)] is a factor of N
      // Then the number is composite
      if (n % i == 0) return 0;
      i += 1;
    }

    // If none of the numbers is a factor,
    // then it is a prime number
    return 1;
  };
  // console.log(TrialDivision(11) ? 'Prime' : 'composite');

  const handleSubmit = e => {
    e.preventDefault();

    setResult(trialDivision(parseInt(data)) ? 'Prime' : 'composite');
    setData('');
    // setResult(null);
  };

  return (
    <div className='my-10 '>
      <h1 className='text-gray-600 text-center text-4xl mb-2'>
        Trial Division Algorithm
      </h1>
      <form
        action=''
        onSubmit={handleSubmit}
        className='flex  flex-col items-center my-6'
      >
        <div>
          <div className='flex items-center'>
            <label
              htmlFor='base'
              className='flex-1 text-left mr-4 text-md text-gray-500'
            >
              Enter a Number to check Prime
            </label>
            <input
              id='base'
              placeholder='a'
              value={data}
              onChange={e => setData(e.target.value)}
              type='text'
              className='block  px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-indigo-500 w-32 h-10  focus:outline-none focus:ring'
            />
          </div>
        </div>
        <div className='flex mt-2'>
          <button
            type='submit'
            disabled={!data.length}
            className='bg-indigo-500 text-base font-medium px-6 py-2 rounded-md focus:outline-none mr-4 '
          >
            Find
          </button>
          {result && <h3 className='text-gray-600'>Result: {result}</h3>}
        </div>
      </form>
    </div>
  );
}

export default TrialDivisionAlgorithm;
