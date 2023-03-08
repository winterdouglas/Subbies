import { MMKV } from "react-native-mmkv";

export interface IStorage {
  loadString: (key: string) => string | null;
  saveString(key: string, value: string): boolean;
  load(key: string): any | null;
  save(key: string, value: any): boolean;
  remove(key: string): void;
  clear(): void;
}

export const createStorage = (_storage?: MMKV): IStorage => {
  const storage = _storage ?? new MMKV();

  return {
    /**
     * Loads a string from storage.
     *
     * @param key The key to fetch.
     */
    loadString: (key: string): string | null => {
      try {
        return storage.getString(key);
      } catch {
        // not sure why this would fail... even reading the RN docs I'm unclear
        return null;
      }
    },

    /**
     * Saves a string to storage.
     *
     * @param key The key to fetch.
     * @param value The value to store.
     */
    saveString: (key: string, value: string): boolean => {
      try {
        storage.set(key, value);
        return true;
      } catch {
        return false;
      }
    },

    /**
     * Loads something from storage and runs it thru JSON.parse.
     *
     * @param key The key to fetch.
     */
    load: (key: string): any | null => {
      try {
        const almostThere = storage.getString(key);
        return JSON.parse(almostThere);
      } catch {
        return null;
      }
    },

    /**
     * Saves an object to storage.
     *
     * @param key The key to fetch.
     * @param value The value to store.
     */
    save: (key: string, value: any): boolean => {
      try {
        storage.set(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },

    /**
     * Removes something from storage.
     *
     * @param key The key to kill.
     */
    remove: (key: string): void => {
      try {
        storage.delete(key);
      } catch {}
    },

    /**
     * Burn it all to the ground.
     */
    clear: (): void => {
      try {
        storage.clearAll();
      } catch {}
    },
  };
};

export const storage = createStorage();
