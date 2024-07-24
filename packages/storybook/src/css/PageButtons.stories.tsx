import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/button';
import '@gemeente-denhaag/pagebuttons';

import '../../../../components/PageButtons/src/stories.js';
import pkg from '../../../../components/PageButtons/package.json';
import readme from '../../../../components/PageButtons/README.md';

const meta = {
  title: 'CSS/Input/PageButtons',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="denhaag-page-buttons">
      <div>
        <button className="denhaag-button denhaag-share-button denhaag-page-buttons__outline-dark-action">
          <svg
            className="denhaag-page-buttons__outline-dark-action__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 16 21"
            fill="none"
          >
            <path
              d="M7.29289 0.792893C7.68342 0.402369 8.31658 0.402369 8.70711 0.792893L11.7071 3.79289C12.0976 4.18342 12.0976 4.81658 11.7071 5.20711C11.3166 5.59763 10.6834 5.59763 10.2929 5.20711L9 3.91421V13.5C9 14.0523 8.55228 14.5 8 14.5C7.44772 14.5 7 14.0523 7 13.5V3.91421L5.70711 5.20711C5.31658 5.59763 4.68342 5.59763 4.29289 5.20711C3.90237 4.81658 3.90237 4.18342 4.29289 3.79289L7.29289 0.792893ZM0 9.5C0 8.39543 0.895431 7.5 2 7.5H4C4.55228 7.5 5 7.94772 5 8.5C5 9.05228 4.55228 9.5 4 9.5H2V18.5H14V9.5H12C11.4477 9.5 11 9.05228 11 8.5C11 7.94772 11.4477 7.5 12 7.5H14C15.1046 7.5 16 8.39543 16 9.5V18.5C16 19.6046 15.1046 20.5 14 20.5H2C0.895431 20.5 0 19.6046 0 18.5V9.5Z"
              fill="currentColor"
            />
          </svg>
          Delen
        </button>
      </div>
      <div className="denhaag-share-button__options">
        <a
          href="https://twitter.com/messages/compose?recipient_id=XXXX"
          aria-label="Share this page on Twitter"
          className="denhaag-button denhaag-share-button__option"
        >
          <svg
            className="denhaag-share-button__option__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.1999 11.8183C13.97 11.7037 12.8501 11.156 12.6416 11.0804C12.433 11.0032 12.2802 10.9658 12.1275 11.1949C11.977 11.4203 11.5385 11.9313 11.4064 12.0826C11.2727 12.2315 11.1398 12.243 10.9129 12.1399C10.6837 12.0253 9.9481 11.7847 9.07726 11.0055C8.39893 10.3982 7.94365 9.65342 7.80921 9.42425C7.67629 9.19509 7.79469 9.06905 7.90851 8.95446C8.0124 8.85134 8.13844 8.69092 8.25303 8.55495C8.36455 8.41668 8.40122 8.32502 8.4799 8.17606C8.55629 8.01564 8.51733 7.8896 8.4608 7.77578C8.40351 7.6612 7.94747 6.53828 7.7565 6.09064C7.57316 5.64453 7.38448 5.70106 7.24317 5.70106C7.11178 5.6896 6.95976 5.6896 6.80698 5.6896C6.65421 5.6896 6.40747 5.74613 6.19816 5.96384C5.98962 6.193 5.3999 6.743 5.3999 7.85446C5.3999 8.96592 6.21726 10.043 6.33108 10.2034C6.4449 10.3524 7.93907 12.644 10.2269 13.6295C10.7723 13.8586 11.1971 13.9961 11.5286 14.1099C12.074 14.2833 12.5713 14.2589 12.9647 14.2024C13.4032 14.1329 14.3145 13.6516 14.5047 13.1131C14.6995 12.5745 14.6995 12.1277 14.6422 12.0245C14.5857 11.9214 14.4359 11.8641 14.2068 11.761L14.1999 11.8183ZM10.0466 17.4466H10.0344C8.68233 17.4466 7.34247 17.0799 6.17296 16.3924L5.89796 16.229L3.03337 16.9738L3.80108 14.1894L3.61851 13.9029C2.86226 12.699 2.46046 11.3126 2.46046 9.88488C2.46046 5.7255 5.86358 2.33384 10.055 2.33384C12.0824 2.33384 13.9852 3.12446 15.4183 4.55675C16.8506 5.97682 17.6405 7.87967 17.6405 9.89634C17.6374 14.0549 14.2335 17.4474 10.0512 17.4474L10.0466 17.4466ZM16.5084 3.46668C14.7667 1.78307 12.475 0.832031 10.0344 0.832031C5.0065 0.832031 0.912818 4.90661 0.910527 9.91696C0.910527 11.5181 1.3299 13.0795 2.12893 14.4583L0.833374 19.1654L5.67261 17.9034C7.00636 18.6238 8.50664 19.0065 10.0344 19.0088H10.039C15.0692 19.0088 19.1644 14.9327 19.1667 9.92155C19.1667 7.49543 18.2195 5.21217 16.4969 3.49648"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="http://www.facebook.com/sharer.php?u=XXXX&t=XXXX"
          aria-label="Share this page on Facebook"
          className="denhaag-button denhaag-share-button__option"
        >
          <svg
            className="denhaag-share-button__option__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M3.297 9.73218V17.3346H6.24327V9.742H8.69902L9.06514 6.77267H6.24327V4.88228C6.24327 4.02339 6.47318 3.43361 7.6542 3.43361H9.16671V0.783306C8.90531 0.747314 8.00851 0.667969 6.96527 0.667969C4.78824 0.667969 3.297 2.04711 3.297 4.58208V6.77022H0.833374V9.73218H3.297Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=XXXX"
          aria-label="Share this page on Twitter"
          className="denhaag-button denhaag-share-button__option"
        >
          <svg
            className="denhaag-share-button__option__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path
              d="M17.3007 1.94516C16.6861 2.21529 16.0299 2.39931 15.3389 2.48333C16.0431 2.05904 16.5847 1.39032 16.841 0.592437C16.1806 0.977838 15.4487 1.25838 14.6695 1.41463C14.0473 0.748681 13.1606 0.332031 12.1759 0.332031C10.2891 0.332031 8.75935 1.86183 8.75935 3.74647C8.75935 4.01729 8.79059 4.2777 8.84754 4.52699C6.00738 4.39297 3.49012 3.02914 1.80547 0.967421C1.50895 1.46879 1.34299 2.0514 1.34299 2.6861C1.34299 3.87355 1.94713 4.91726 2.86237 5.53043C2.30197 5.51237 1.77491 5.35821 1.31521 5.10267V5.14502C1.31521 6.80121 2.49086 8.1824 4.05537 8.49697C3.76858 8.57405 3.46582 8.61571 3.15541 8.61571C2.93737 8.61571 2.72835 8.59488 2.51933 8.55599C2.9575 9.91219 4.21717 10.901 5.71642 10.9288C4.5498 11.8447 3.07139 12.3906 1.47909 12.3906C1.20827 12.3906 0.938142 12.3746 0.666626 12.344C2.1867 13.312 3.9776 13.878 5.91432 13.878C12.2016 13.878 15.6354 8.67266 15.6354 4.1659C15.6354 4.02077 15.6354 3.87424 15.625 3.72842C16.2924 3.24996 16.875 2.64513 17.3333 1.95905L17.3007 1.94516Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=XXXX"
          aria-label="Share this page on Twitter"
          className="denhaag-button denhaag-share-button__option"
        >
          <svg
            className="denhaag-share-button__option__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path
              d="M0.666626 1.9987C0.666626 1.07822 1.41282 0.332031 2.33329 0.332031H15.6666C16.5871 0.332031 17.3333 1.07822 17.3333 1.9987V11.9987C17.3333 12.9192 16.5871 13.6654 15.6666 13.6654H2.33329C1.41282 13.6654 0.666626 12.9192 0.666626 11.9987V1.9987ZM3.59879 1.9987L8.99996 6.72472L14.4011 1.9987H3.59879ZM15.6666 3.106L9.54871 8.45918C9.23453 8.73409 8.76539 8.73409 8.45121 8.45918L2.33329 3.106V11.9987H15.6666V3.106Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  ),
};
