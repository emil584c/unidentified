'use client'

import { useTheme } from 'next-themes';
import Select from 'react-select';
import { useEffect, useState } from 'react';

export default function DropDown({name, options, defaultValue, onChange, placeholder}) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = mounted && currentTheme === 'dark';
  
  // Custom styles for dark/light mode
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: isDarkMode ? '#2D3748' : provided.backgroundColor,
      borderColor: isDarkMode ? '#4A5568' : provided.borderColor,
      boxShadow: state.isFocused 
        ? isDarkMode ? '0 0 0 1px #4299E1' : provided.boxShadow 
        : provided.boxShadow,
      '&:hover': {
        borderColor: isDarkMode ? '#4299E1' : provided.borderColor,
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? '#2D3748' : provided.backgroundColor,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: isDarkMode 
        ? state.isSelected 
          ? '#4299E1' 
          : state.isFocused 
            ? '#4A5568' 
            : '#2D3748'
        : state.isSelected 
          ? provided.backgroundColor 
          : state.isFocused 
            ? provided.backgroundColor 
            : provided.backgroundColor,
      color: isDarkMode ? '#E2E8F0' : provided.color,
      '&:active': {
        backgroundColor: isDarkMode ? '#4299E1' : provided.backgroundColor,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? '#E2E8F0' : provided.color,
    }),
    input: (provided) => ({
      ...provided,
      color: isDarkMode ? '#E2E8F0' : provided.color,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? '#A0AEC0' : provided.color,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? '#4A5568' : provided.backgroundColor,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: isDarkMode ? '#E2E8F0' : provided.color,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: isDarkMode ? '#E2E8F0' : provided.color,
      '&:hover': {
        backgroundColor: isDarkMode ? '#FC8181' : provided.backgroundColor,
        color: isDarkMode ? '#1A202C' : provided.color,
      },
    }),
  };

  // Use a div with conditional className to add Tailwind styling
  return (
    <div className={`${isDarkMode ? 'dark-select-container' : 'light-select-container'}`}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isClearable
        isSearchable
        name={name}
        placeholder={placeholder ? placeholder : 'Select an option'}
        options={options}
        onChange={onChange}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: isDarkMode ? '#4299E1' : theme.colors.primary,
            primary75: isDarkMode ? '#3182CE' : theme.colors.primary75,
            primary50: isDarkMode ? '#2B6CB0' : theme.colors.primary50,
            primary25: isDarkMode ? '#2C5282' : theme.colors.primary25,
            danger: isDarkMode ? '#FC8181' : theme.colors.danger,
            dangerLight: isDarkMode ? '#FEB2B2' : theme.colors.dangerLight,
            neutral0: isDarkMode ? '#2D3748' : theme.colors.neutral0,
            neutral5: isDarkMode ? '#2D3748' : theme.colors.neutral5,
            neutral10: isDarkMode ? '#2D3748' : theme.colors.neutral10,
            neutral20: isDarkMode ? '#4A5568' : theme.colors.neutral20,
            neutral30: isDarkMode ? '#718096' : theme.colors.neutral30,
            neutral40: isDarkMode ? '#A0AEC0' : theme.colors.neutral40,
            neutral50: isDarkMode ? '#A0AEC0' : theme.colors.neutral50,
            neutral60: isDarkMode ? '#CBD5E0' : theme.colors.neutral60,
            neutral70: isDarkMode ? '#E2E8F0' : theme.colors.neutral70,
            neutral80: isDarkMode ? '#E2E8F0' : theme.colors.neutral80,
            neutral90: isDarkMode ? '#F7FAFC' : theme.colors.neutral90,
          },
        })}
      />
    </div>
  );
}