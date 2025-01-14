import React from 'react'

const Footer = () => {
  return (

    <div className=" relative bottom-0 w-full h-96 pt-25 pb-6 bg-black flex-col justify-end items-center gap-10 inline-flex  ">
      <div className="justify-center items-start gap-20 inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-28 h-6 justify-center items-center inline-flex">
                <div className="text-neutral-50 text-2xl font-bold leading-normal tracking-wide">Exclusive</div>
              </div>
              <div className="text-neutral-50 text-xl font-medium leading-7">Subscribe</div>
            </div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Get 10% off your first order</div>
          </div>
          <div className=" justify-start items-center gap-8 inline-flex">
            <svg width="217" height="48" viewBox="0 0 217 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M18.688 20.032V23.76H22.752V24.96H18.688V28.8H23.232V30H17.232V18.832H23.232V20.032H18.688ZM29.7071 21.072C30.7738 21.072 31.6378 21.3973 32.2991 22.048C32.9605 22.688 33.2911 23.616 33.2911 24.832V30H31.8511V25.04C31.8511 24.1653 31.6325 23.4987 31.1951 23.04C30.7578 22.5707 30.1605 22.336 29.4031 22.336C28.6351 22.336 28.0218 22.576 27.5631 23.056C27.1151 23.536 26.8911 24.2347 26.8911 25.152V30H25.4351V21.232H26.8911V22.48C27.1791 22.032 27.5685 21.6853 28.0591 21.44C28.5605 21.1947 29.1098 21.072 29.7071 21.072ZM37.4455 22.432V27.6C37.4455 28.0267 37.5362 28.3307 37.7175 28.512C37.8988 28.6827 38.2135 28.768 38.6615 28.768H39.7335V30H38.4215C37.6108 30 37.0028 29.8133 36.5975 29.44C36.1922 29.0667 35.9895 28.4533 35.9895 27.6V22.432H34.8535V21.232H35.9895V19.024H37.4455V21.232H39.7335V22.432H37.4455ZM49.4976 25.28C49.4976 25.5573 49.4816 25.8507 49.4496 26.16H42.4416C42.495 27.024 42.7883 27.7013 43.3216 28.192C43.8656 28.672 44.5216 28.912 45.2896 28.912C45.919 28.912 46.4416 28.768 46.8576 28.48C47.2843 28.1813 47.583 27.7867 47.7536 27.296H49.3216C49.087 28.1387 48.6176 28.8267 47.9136 29.36C47.2096 29.8827 46.335 30.144 45.2896 30.144C44.4576 30.144 43.711 29.9573 43.0496 29.584C42.399 29.2107 41.887 28.6827 41.5136 28C41.1403 27.3067 40.9536 26.5067 40.9536 25.6C40.9536 24.6933 41.135 23.8987 41.4976 23.216C41.8603 22.5333 42.367 22.0107 43.0176 21.648C43.679 21.2747 44.4363 21.088 45.2896 21.088C46.1216 21.088 46.8576 21.2693 47.4976 21.632C48.1376 21.9947 48.6283 22.496 48.9696 23.136C49.3216 23.7653 49.4976 24.48 49.4976 25.28ZM47.9936 24.976C47.9936 24.4213 47.871 23.9467 47.6256 23.552C47.3803 23.1467 47.0443 22.8427 46.6176 22.64C46.2016 22.4267 45.7376 22.32 45.2256 22.32C44.4896 22.32 43.8603 22.5547 43.3376 23.024C42.8256 23.4933 42.5323 24.144 42.4576 24.976H47.9936ZM52.8755 22.656C53.1315 22.1547 53.4942 21.7653 53.9635 21.488C54.4435 21.2107 55.0248 21.072 55.7075 21.072V22.576H55.3235C53.6915 22.576 52.8755 23.4613 52.8755 25.232V30H51.4195V21.232H52.8755V22.656ZM69.2059 21.232L63.9259 34.128H62.4219L64.1499 29.904L60.6139 21.232H62.2299L64.9819 28.336L67.7019 21.232H69.2059ZM74.4935 30.144C73.6722 30.144 72.9255 29.9573 72.2535 29.584C71.5922 29.2107 71.0695 28.6827 70.6855 28C70.3122 27.3067 70.1255 26.5067 70.1255 25.6C70.1255 24.704 70.3175 23.9147 70.7015 23.232C71.0962 22.5387 71.6295 22.0107 72.3015 21.648C72.9735 21.2747 73.7255 21.088 74.5575 21.088C75.3895 21.088 76.1415 21.2747 76.8135 21.648C77.4855 22.0107 78.0135 22.5333 78.3975 23.216C78.7922 23.8987 78.9895 24.6933 78.9895 25.6C78.9895 26.5067 78.7868 27.3067 78.3815 28C77.9868 28.6827 77.4482 29.2107 76.7655 29.584C76.0828 29.9573 75.3255 30.144 74.4935 30.144ZM74.4935 28.864C75.0162 28.864 75.5068 28.7413 75.9655 28.496C76.4242 28.2507 76.7922 27.8827 77.0695 27.392C77.3575 26.9013 77.5015 26.304 77.5015 25.6C77.5015 24.896 77.3628 24.2987 77.0855 23.808C76.8082 23.3173 76.4455 22.9547 75.9975 22.72C75.5495 22.4747 75.0642 22.352 74.5415 22.352C74.0082 22.352 73.5175 22.4747 73.0695 22.72C72.6322 22.9547 72.2802 23.3173 72.0135 23.808C71.7468 24.2987 71.6135 24.896 71.6135 25.6C71.6135 26.3147 71.7415 26.9173 71.9975 27.408C72.2642 27.8987 72.6162 28.2667 73.0535 28.512C73.4908 28.7467 73.9708 28.864 74.4935 28.864ZM88.6799 21.232V30H87.2239V28.704C86.9465 29.152 86.5572 29.504 86.0559 29.76C85.5652 30.0053 85.0212 30.128 84.4239 30.128C83.7412 30.128 83.1279 29.9893 82.5839 29.712C82.0399 29.424 81.6079 28.9973 81.2879 28.432C80.9785 27.8667 80.8239 27.1787 80.8239 26.368V21.232H82.2639V26.176C82.2639 27.04 82.4825 27.7067 82.9199 28.176C83.3572 28.6347 83.9545 28.864 84.7119 28.864C85.4905 28.864 86.1039 28.624 86.5519 28.144C86.9999 27.664 87.2239 26.9653 87.2239 26.048V21.232H88.6799ZM92.5943 22.656C92.8503 22.1547 93.2129 21.7653 93.6823 21.488C94.1623 21.2107 94.7436 21.072 95.4263 21.072V22.576H95.0423C93.4103 22.576 92.5943 23.4613 92.5943 25.232V30H91.1383V21.232H92.5943V22.656ZM109.373 25.28C109.373 25.5573 109.357 25.8507 109.325 26.16H102.317C102.37 27.024 102.663 27.7013 103.197 28.192C103.741 28.672 104.397 28.912 105.165 28.912C105.794 28.912 106.317 28.768 106.733 28.48C107.159 28.1813 107.458 27.7867 107.629 27.296H109.197C108.962 28.1387 108.493 28.8267 107.789 29.36C107.085 29.8827 106.21 30.144 105.165 30.144C104.333 30.144 103.586 29.9573 102.925 29.584C102.274 29.2107 101.762 28.6827 101.389 28C101.015 27.3067 100.829 26.5067 100.829 25.6C100.829 24.6933 101.01 23.8987 101.373 23.216C101.735 22.5333 102.242 22.0107 102.893 21.648C103.554 21.2747 104.311 21.088 105.165 21.088C105.997 21.088 106.733 21.2693 107.373 21.632C108.013 21.9947 108.503 22.496 108.845 23.136C109.197 23.7653 109.373 24.48 109.373 25.28ZM107.869 24.976C107.869 24.4213 107.746 23.9467 107.501 23.552C107.255 23.1467 106.919 22.8427 106.493 22.64C106.077 22.4267 105.613 22.32 105.101 22.32C104.365 22.32 103.735 22.5547 103.213 23.024C102.701 23.4933 102.407 24.144 102.333 24.976H107.869ZM121.839 21.072C122.521 21.072 123.129 21.216 123.663 21.504C124.196 21.7813 124.617 22.2027 124.927 22.768C125.236 23.3333 125.391 24.0213 125.391 24.832V30H123.951V25.04C123.951 24.1653 123.732 23.4987 123.295 23.04C122.868 22.5707 122.287 22.336 121.551 22.336C120.793 22.336 120.191 22.5813 119.743 23.072C119.295 23.552 119.071 24.2507 119.071 25.168V30H117.631V25.04C117.631 24.1653 117.412 23.4987 116.975 23.04C116.548 22.5707 115.967 22.336 115.231 22.336C114.473 22.336 113.871 22.5813 113.423 23.072C112.975 23.552 112.751 24.2507 112.751 25.168V30H111.295V21.232H112.751V22.496C113.039 22.0373 113.423 21.6853 113.903 21.44C114.393 21.1947 114.932 21.072 115.519 21.072C116.255 21.072 116.905 21.2373 117.471 21.568C118.036 21.8987 118.457 22.384 118.735 23.024C118.98 22.4053 119.385 21.9253 119.951 21.584C120.516 21.2427 121.145 21.072 121.839 21.072ZM127.235 25.584C127.235 24.688 127.416 23.904 127.779 23.232C128.142 22.5493 128.638 22.0213 129.267 21.648C129.907 21.2747 130.616 21.088 131.395 21.088C132.163 21.088 132.83 21.2533 133.395 21.584C133.96 21.9147 134.382 22.3307 134.659 22.832V21.232H136.131V30H134.659V28.368C134.371 28.88 133.939 29.3067 133.363 29.648C132.798 29.9787 132.136 30.144 131.379 30.144C130.6 30.144 129.896 29.952 129.267 29.568C128.638 29.184 128.142 28.6453 127.779 27.952C127.416 27.2587 127.235 26.4693 127.235 25.584ZM134.659 25.6C134.659 24.9387 134.526 24.3627 134.259 23.872C133.992 23.3813 133.63 23.008 133.171 22.752C132.723 22.4853 132.227 22.352 131.683 22.352C131.139 22.352 130.643 22.48 130.195 22.736C129.747 22.992 129.39 23.3653 129.123 23.856C128.856 24.3467 128.723 24.9227 128.723 25.584C128.723 26.256 128.856 26.8427 129.123 27.344C129.39 27.8347 129.747 28.2133 130.195 28.48C130.643 28.736 131.139 28.864 131.683 28.864C132.227 28.864 132.723 28.736 133.171 28.48C133.63 28.2133 133.992 27.8347 134.259 27.344C134.526 26.8427 134.659 26.2613 134.659 25.6ZM139.343 19.808C139.066 19.808 138.831 19.712 138.639 19.52C138.447 19.328 138.351 19.0933 138.351 18.816C138.351 18.5387 138.447 18.304 138.639 18.112C138.831 17.92 139.066 17.824 139.343 17.824C139.61 17.824 139.834 17.92 140.015 18.112C140.207 18.304 140.303 18.5387 140.303 18.816C140.303 19.0933 140.207 19.328 140.015 19.52C139.834 19.712 139.61 19.808 139.343 19.808ZM140.047 21.232V30H138.591V21.232H140.047ZM143.985 18.16V30H142.529V18.16H143.985Z" fill="#FAFAFA" />
              <path d="M187.912 23.9998H182L180.023 16.1348C180.01 16.0891 180.003 16.0422 180 15.9948C179.978 15.2738 180.772 14.7738 181.46 15.1038L200 23.9998L181.46 32.8958C180.78 33.2228 179.996 32.7368 180 32.0288C180.002 31.9655 180.013 31.9029 180.033 31.8428L181.5 26.9998" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="0.75" y="0.75" width="215.5" height="46.5" rx="3.25" stroke="#FAFAFA" stroke-width="1.5" />
            </svg>

            <div className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Support</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-44 text-neutral-50 text-base font-normal leading-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">exclusive@gmail.com</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">+88015-88888-9999</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Account</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">My Account</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Login / Register</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Cart</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Wishlist</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Shop</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-50 text-xl font-medium leading-7">Quick Link</div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-base font-normal leading-normal">Privacy Policy</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Terms Of Use</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">FAQ</div>
            <div className="text-neutral-50 text-base font-normal leading-normal">Contact</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-neutral-50 text-xl font-medium leading-7">Download App</div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="opacity-70 text-neutral-50 text-xs font-medium leading-none">Save $3 with App New User Only</div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-20 h-20 p-0.5 bg-black justify-center items-center flex">
                  <img className="w-20 h-20 border border-white" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png" />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-28 h-10 relative bg-black">
                    <img className="w-24 h-7 left-[3px] top-[5px] absolute rounded border border-neutral-50" src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge-1.png" />
                  </div>
                  <div className="w-28 h-10 p-0.5 bg-black justify-center items-center inline-flex">
                    <img className="w-24 h-8 rounded border border-white" src="https://w7.pngwing.com/pngs/34/523/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 pr-0.5 justify-start items-center flex">
              <div className="w-7 h-6 relative">
              </div>
            </div>
            <div className="w-6 h-6 p-0.5 justify-center items-center flex">
              <div className="w-4 h-4 relative">
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      <div className="opacity-40 flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
          <div className="w-96 h-px opacity-40 border border-white"></div>
        </div>
        <div className="opacity-60 justify-start items-center gap-3 inline-flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 p-0.5 justify-center items-center flex">
              <div className="w-4 h-4 relative">
              </div>
            </div>
            <div className="text-white text-base font-normal leading-normal">Copyright Rimel 2022. All right reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer