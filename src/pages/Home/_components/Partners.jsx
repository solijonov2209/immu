import React from 'react';
import Amerikan from '../../../assets/images/Amazon.svg';
import WesternUnion from '../../../assets/images/westrnunion.svg';
import Klarna from '../../../assets/images/klarna.svg';
import Skrill from '../../../assets/images/Skrill.svg';
import Stripe from '../../../assets/images/Stripe.svg';
import Amazon from '../../../assets/images/Amazon.svg';
import { useTranslation } from 'react-i18next';

import './Partners.scss';

export const Partners = () => {
  const partners = [Amerikan, WesternUnion, Klarna, Skrill, Stripe, Amazon];
  const repeatedPartners = [...partners, ...partners];
  const { t } = useTranslation();

  return (
    <section className="partners">
      <h2 className="partners__title">{t('partners.title')}</h2>

      <div className="partners__container">
        {/* First row */}
        <div className="partners__row animate-scroll">
          {repeatedPartners.map((partner, index) => (
            <div key={`first-${index}`} className="partners__card">
              <img src={partner} alt={`partner-${index}`} />
            </div>
          ))}
        </div>

        {/* Second row (reverse) */}
        <div className="partners__row partners__row--reverse animate-scroll-reverse">
          {repeatedPartners.map((partner, index) => (
            <div key={`second-${index}`} className="partners__card">
              <img src={partner} alt={`partner-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
