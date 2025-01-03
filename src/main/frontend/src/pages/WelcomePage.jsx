import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
    const { t } = useTranslation(); // Import translation hook
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddRecipe = () => {
        alert(t('welcomeBack.addRecipeAlert'));
        // Add navigation or action logic for adding a recipe here
    };

    const handleSearch = () => {
        alert(`${t('welcomeBack.searchAlert')}: ${searchTerm}`);
        // Add navigation or action logic for searching recipes here
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
            <h1>{t('welcomeBack.title')}</h1>
            <p>{t('welcomeBack.description')}</p>

            {/* Add Recipe Button */}
            <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '10px',
                }}
                onClick={handleAddRecipe}
            >
                {t('welcomeBack.addRecipeButton')}
            </button>

            {/* Search Recipes */}
            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder={t('welcomeBack.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        width: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginRight: '10px',
                    }}
                />
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={handleSearch}
                >
                    {t('welcomeBack.searchButton')}
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
