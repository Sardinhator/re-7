import React from 'react';
import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
    const { t } = useTranslation(); // Import translation hook

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{t('welcomeBack.title')}</h1>
            <p>{t('welcomeBack.description')}</p>
            <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert(t('welcomeBack.alert'))}
            >
                {t('welcomeBack.button')}
            </button>
        </div>
    );
};

export default WelcomePage;
