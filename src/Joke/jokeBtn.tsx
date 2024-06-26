import React from 'react';

interface Props {
  onPress: () => void;
}

const JokeBtn: React.FC<Props> = React.memo(({onPress}) => {
  return (
    <>
      <button type={'button'} onClick={onPress} className={'btn btn-dark'}>New Joke</button>
    </>
  );
});

export default JokeBtn;