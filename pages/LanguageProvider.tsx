// <<<<<<< HEAD
// // LanguageProvider.js
// =======
// "use client"
// >>>>>>> 1ff994652e8d876df4b7251840838cdecfc6de98
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// const defaultLanguageValue = {
//   isEnglish: true,
//   toggleLanguage: () => {},
// };

// interface LanguageContextType {
//   isEnglish: boolean;
//   toggleLanguage: () => void;
// }

// const LanguageContext = createContext<LanguageContextType>(defaultLanguageValue);

// export const useLanguage = () => useContext(LanguageContext);

// <<<<<<< HEAD
// =======
// interface LanguageProviderProps {
//   children: ReactNode;
// }

// >>>>>>> 1ff994652e8d876df4b7251840838cdecfc6de98
// export const LanguageProvider = ({ children }: LanguageProviderProps) => {
//   const [isEnglish, setIsEnglish] = useState(true);

//   const toggleLanguage = () => {
//     setIsEnglish(!isEnglish);
//   };

//   const value = {
//     isEnglish,
//     toggleLanguage,
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
// <<<<<<< HEAD

// interface LanguageProviderProps {
//   children: ReactNode;
// }

// export default LanguageProvider;
// =======
// >>>>>>> 1ff994652e8d876df4b7251840838cdecfc6de98
