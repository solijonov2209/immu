import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';
import styles from './Consultation.module.scss';

// 🔑 Muhim: bayroq chiqishi uchun CSS import qilish shart!
import 'react-phone-input-2/lib/style.css';

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Chap qism */}
          <div className={styles.left}>
            <h2 className={styles.leftTitle}>{t('consultation.title')}</h2>
            <p className={styles.leftDesc}>{t('consultation.description')}</p>
          </div>

          {/* O‘ng qism */}
          <div className={styles.right}>
            <h3 className={styles.formTitle}>{t('consultation.formTitle')}</h3>
            <p className={styles.formDesc}>{t('consultation.formDescription')}</p>

            <form className={styles.form}>
              <input
                type="text"
                placeholder={t('consultation.namePlaceholder')}
                className={styles.input}
              />

              <div className={styles.phoneWrapper}>
                <PhoneInput
                  country={'gb'} // default country flag
                  enableSearch={true} // qidiruv qo'shish
                  inputClass={styles.phoneInput} // SCSS orqali style berish
                  buttonClass={styles.phoneBtn} // flag button style
                  dropdownClass={styles.phoneDropdown} // dropdown style
                  placeholder={t('consultation.phonePlaceholder')}
                />
              </div>

              <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="consent" />
                <label htmlFor="consent">{t('consultation.checkbox')}</label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                {t('consultation.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
