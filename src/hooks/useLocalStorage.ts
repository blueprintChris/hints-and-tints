const useLocalStorage = () => {
  const setNicknameLocalStorage = (nickname: string) => {
    localStorage.setItem('nickname', nickname);
  };

  const setPlayerIdLocalStorage = (playerId: string) => {
    localStorage.setItem('playerId', playerId);
  };

  const getNicknameLocalStorage = () => {
    return localStorage.getItem('nickname');
  };

  const getPlayerIdLocalStorage = () => {
    return localStorage.getItem('playerId');
  };

  return {
    setNicknameLocalStorage,
    setPlayerIdLocalStorage,
    getNicknameLocalStorage,
    getPlayerIdLocalStorage,
  };
};

export default useLocalStorage;
