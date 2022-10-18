const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const localstorageAuthService = (() => {
  function privateSetAccessToken(token: string): void {
    return localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  function privateGetAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  function privateClearAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  function privateSetRefreshToken(token: string): void {
    return localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  function privateGetRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  function privateClearRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  function privateClearStorage(): void {
    localStorage.clear();
  }

  return {
    setAccessToken: privateSetAccessToken,
    getAccessToken: privateGetAccessToken,
    clearAccessToken: privateClearAccessToken,
    setRefreshToken: privateSetRefreshToken,
    getRefreshToken: privateGetRefreshToken,
    clearRefreshToken: privateClearRefreshToken,
    clearStorage: privateClearStorage,
  };
})();
