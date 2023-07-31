import { useEffect, useState } from 'react';

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name: string) => {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
};

const useCookie = <T extends string | boolean>(cookieName: string, initialValue: T, expirationDays = 30) => {
  const cookieFromStorage = getCookie(cookieName);
  const initialCookieValue = cookieFromStorage !== '' ? (cookieFromStorage as T) : initialValue;
  const [cookieValue, setCookieValue] = useState<T>(initialCookieValue);

  useEffect(() => {
    setCookie(cookieName, cookieValue.toString(), expirationDays);
  }, [cookieName, cookieValue, expirationDays]);

  const updateCookieValue = (newValue: T) => {
    setCookieValue(newValue);
  };

  return [cookieValue, updateCookieValue] as const;
};

export default useCookie;
