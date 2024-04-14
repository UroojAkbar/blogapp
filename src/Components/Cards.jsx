



import React from "react";
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="bg-blue-500 bg-opacity-10 border-t-2 border-r-2 border-b-2 border-blue-500 border-opacity-10">
      <div className="text-center text-5xl font-bold pt-12 pb-12">
        Best Blogs
      </div>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center justify-center mx-auto max-w-screen-lg">
        <div className="max-w-xs rounded-lg overflow-hidden">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/280a/1e20/25d70b4e45a365eb98d2fdcf78ebbaf1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRjtX1h-idJtK8K8wEFMOvXJqZqzVQRsjGWow5FxrfxhR3l~E8Vfd3fhf04SMEnU5e5wj5VZJqsINtn7i0ocKV6aG6~jM1rg~tjcBIgmJQIS01DtSQF-dnZIN~SvPX241QiSrfDTwmsuEUvq3tHY-5nqEWJhEcW4umR-f0BWZWXRyzNxc6FMBvc6zuntkeESenL29yFWE4lu-AXwohlz16yffP5PhiQ1Pk7ufCxKuRLj6p3uQNBf2l0aRbUsg0k2W5Uz2OSo3XWJNYQe9rApKs0DEGdzjAGrBlFORmqntV4cFqVmS86HreUYsiwFpwiJwHBAQkyVQAn019irHP7VNQ__"
          />
          <div className="px-6 py-4 bg-black bg-opacity-80">
            <div className="font-bold text-xl text-white mb-2 text-center">
              ReactJs
            </div>
          </div>
        </div>
        <div class="max-w-xs rounded-lg overflow-hidden">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/52e8/c003/bd51cfc2000942d077fe45468ad5810b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgn2bVv5mRPxQ4jyLzxtLL-5Msl1ZgVZzSUthyduPfFGEJtz4N~H28P05zRZcYtU~uWcSXKlKycHaUqrpi5BZ74rxYiyXxVA14U-YG5MyrXisqx0dJsD868iSHgQ7ISGuYCkfRsalkHvjMtenIO03Nou-QGQ8apsVnLTp5nF-~T30iyPFZDuemgQqF-WggJFS01fZsqT-msXnWIpUUiUPfuGwhvVpO5IZ1c8WzmY3Nc1eEJRTi0iDEbMsDYl1vmeH5ztva77R8Nex-5unFqbM0-3LAAMJyRegDvgQycxX5CtIkgNbQSoVfxrMtWhowvJnUWqcq6o1vi7o2iJOjl1nQ__"
          ></img>
          <div class="px-6 py-4 bg-black bg-opacity-60">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              MongoDb
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/280a/1e20/25d70b4e45a365eb98d2fdcf78ebbaf1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRjtX1h-idJtK8K8wEFMOvXJqZqzVQRsjGWow5FxrfxhR3l~E8Vfd3fhf04SMEnU5e5wj5VZJqsINtn7i0ocKV6aG6~jM1rg~tjcBIgmJQIS01DtSQF-dnZIN~SvPX241QiSrfDTwmsuEUvq3tHY-5nqEWJhEcW4umR-f0BWZWXRyzNxc6FMBvc6zuntkeESenL29yFWE4lu-AXwohlz16yffP5PhiQ1Pk7ufCxKuRLj6p3uQNBf2l0aRbUsg0k2W5Uz2OSo3XWJNYQe9rApKs0DEGdzjAGrBlFORmqntV4cFqVmS86HreUYsiwFpwiJwHBAQkyVQAn019irHP7VNQ__"
          ></img>
          <div class="px-6 py-4 bg-black">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              ReactJs
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/280a/1e20/25d70b4e45a365eb98d2fdcf78ebbaf1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRjtX1h-idJtK8K8wEFMOvXJqZqzVQRsjGWow5FxrfxhR3l~E8Vfd3fhf04SMEnU5e5wj5VZJqsINtn7i0ocKV6aG6~jM1rg~tjcBIgmJQIS01DtSQF-dnZIN~SvPX241QiSrfDTwmsuEUvq3tHY-5nqEWJhEcW4umR-f0BWZWXRyzNxc6FMBvc6zuntkeESenL29yFWE4lu-AXwohlz16yffP5PhiQ1Pk7ufCxKuRLj6p3uQNBf2l0aRbUsg0k2W5Uz2OSo3XWJNYQe9rApKs0DEGdzjAGrBlFORmqntV4cFqVmS86HreUYsiwFpwiJwHBAQkyVQAn019irHP7VNQ__"
          ></img>
          <div class="px-6 py-4 bg-black">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              ReactJs
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/52e8/c003/bd51cfc2000942d077fe45468ad5810b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgn2bVv5mRPxQ4jyLzxtLL-5Msl1ZgVZzSUthyduPfFGEJtz4N~H28P05zRZcYtU~uWcSXKlKycHaUqrpi5BZ74rxYiyXxVA14U-YG5MyrXisqx0dJsD868iSHgQ7ISGuYCkfRsalkHvjMtenIO03Nou-QGQ8apsVnLTp5nF-~T30iyPFZDuemgQqF-WggJFS01fZsqT-msXnWIpUUiUPfuGwhvVpO5IZ1c8WzmY3Nc1eEJRTi0iDEbMsDYl1vmeH5ztva77R8Nex-5unFqbM0-3LAAMJyRegDvgQycxX5CtIkgNbQSoVfxrMtWhowvJnUWqcq6o1vi7o2iJOjl1nQ__"
          ></img>
          <div class="px-6 py-4 bg-black bg-opacity-60">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              MongoDb
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/52e8/c003/bd51cfc2000942d077fe45468ad5810b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgn2bVv5mRPxQ4jyLzxtLL-5Msl1ZgVZzSUthyduPfFGEJtz4N~H28P05zRZcYtU~uWcSXKlKycHaUqrpi5BZ74rxYiyXxVA14U-YG5MyrXisqx0dJsD868iSHgQ7ISGuYCkfRsalkHvjMtenIO03Nou-QGQ8apsVnLTp5nF-~T30iyPFZDuemgQqF-WggJFS01fZsqT-msXnWIpUUiUPfuGwhvVpO5IZ1c8WzmY3Nc1eEJRTi0iDEbMsDYl1vmeH5ztva77R8Nex-5unFqbM0-3LAAMJyRegDvgQycxX5CtIkgNbQSoVfxrMtWhowvJnUWqcq6o1vi7o2iJOjl1nQ__"
          ></img>
          <div class="px-6 py-4 bg-black bg-opacity-60">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              MongoDb
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/280a/1e20/25d70b4e45a365eb98d2fdcf78ebbaf1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRjtX1h-idJtK8K8wEFMOvXJqZqzVQRsjGWow5FxrfxhR3l~E8Vfd3fhf04SMEnU5e5wj5VZJqsINtn7i0ocKV6aG6~jM1rg~tjcBIgmJQIS01DtSQF-dnZIN~SvPX241QiSrfDTwmsuEUvq3tHY-5nqEWJhEcW4umR-f0BWZWXRyzNxc6FMBvc6zuntkeESenL29yFWE4lu-AXwohlz16yffP5PhiQ1Pk7ufCxKuRLj6p3uQNBf2l0aRbUsg0k2W5Uz2OSo3XWJNYQe9rApKs0DEGdzjAGrBlFORmqntV4cFqVmS86HreUYsiwFpwiJwHBAQkyVQAn019irHP7VNQ__"
          ></img>
          <div class="px-6 py-4 bg-black">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              ReactJs
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/52e8/c003/bd51cfc2000942d077fe45468ad5810b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgn2bVv5mRPxQ4jyLzxtLL-5Msl1ZgVZzSUthyduPfFGEJtz4N~H28P05zRZcYtU~uWcSXKlKycHaUqrpi5BZ74rxYiyXxVA14U-YG5MyrXisqx0dJsD868iSHgQ7ISGuYCkfRsalkHvjMtenIO03Nou-QGQ8apsVnLTp5nF-~T30iyPFZDuemgQqF-WggJFS01fZsqT-msXnWIpUUiUPfuGwhvVpO5IZ1c8WzmY3Nc1eEJRTi0iDEbMsDYl1vmeH5ztva77R8Nex-5unFqbM0-3LAAMJyRegDvgQycxX5CtIkgNbQSoVfxrMtWhowvJnUWqcq6o1vi7o2iJOjl1nQ__"
          ></img>
          <div class="px-6 py-4 bg-black bg-opacity-60">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              MongoDb
            </div>
          </div>
        </div>

        <div class="max-w-xs rounded-lg overflow-hidden mt-8">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/280a/1e20/25d70b4e45a365eb98d2fdcf78ebbaf1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRjtX1h-idJtK8K8wEFMOvXJqZqzVQRsjGWow5FxrfxhR3l~E8Vfd3fhf04SMEnU5e5wj5VZJqsINtn7i0ocKV6aG6~jM1rg~tjcBIgmJQIS01DtSQF-dnZIN~SvPX241QiSrfDTwmsuEUvq3tHY-5nqEWJhEcW4umR-f0BWZWXRyzNxc6FMBvc6zuntkeESenL29yFWE4lu-AXwohlz16yffP5PhiQ1Pk7ufCxKuRLj6p3uQNBf2l0aRbUsg0k2W5Uz2OSo3XWJNYQe9rApKs0DEGdzjAGrBlFORmqntV4cFqVmS86HreUYsiwFpwiJwHBAQkyVQAn019irHP7VNQ__"
          ></img>
          <div class="px-6 py-4 bg-black">
            <div class="font-bold text-xl text-white mb-2 items-center justify-center flex">
              ReactJs
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex items-center justify-center pb-28">
        <Link to='/articles'>
          <button className="bg-indigo-600 mt-24 rounded-xl w-56 h-12 font-bold text-lg text-white">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;

