/***********************************************************ALL CLINICS API***************************************************************/

import { string } from "astro:schema";

/* GET All Clinic APIs starts */
export interface IAllClinicsGETResponse {
  status: boolean;
  message: string;
  data: IAllClinicsGETResponseData;
}
export interface IAllClinicsGETResponseData {
  count: number;
  next: null;
  previous: null;
  results: IGETAllClinicsResult[];
}
export interface IGETAllClinicsResult {
  id: string;
  name: string;
  address: string;
  address2: null;
  status: string;
  district: string;
  pincode: string;
  location_url: string;
  image_url: string;
  display_name: string;
  total_rating: number;
  rating: string;
  images: [];
  latitude: number;
  longitude: number;
  mobile: string;
  offers: string;
  visiting_hours: {
    monday_start_time: string;
    monday_end_time: string;
    tuesday_start_time: string;
    tuesday_end_time: string;
    wednesday_start_time: string;
    wednesday_end_time: string;
    thursday_start_time: string;
    thursday_end_time: string;
    friday_start_time: string;
    friday_end_time: string;
    saturday_start_time: string;
    saturday_end_time: string;
    sunday_start_time: string;
    sunday_end_time: string;
  };
  gmb_place_id: string;
  image_groups_url: string;
  web_url_path: string;
  vetbuddy_instance_id: string;
  vetbuddy_clinic_id: string;
  district_no: string;
  email: string;
  review_url: string;
  vetbuddy_clinic_name: string;
  image_group_url_detail_v2: string;
  image_group_url_list_v2: string;
}
/* Get All Clinic APIs data end */

/***********************************************************CLINICS LOCATOR***************************************************************/

/* GET ClinicLocator static data starts */

export interface IGETClinicsLocatorMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}

export interface IGETClinicsLocatorMain {
  meta: IGETClinicsLocatorMeta;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };

  clinicLocator: {
    heading: string;
    subHeading: string;
    buttonText: string;
    mobileImage: string;
    desktopImage: string;
    searchBarHeading: string;
    cities: string[];
  };
  clinicLocations: {
    buttonText1: string;
    buttonText2: string;
  };
}
export interface IGETClinicsLocatorBody {
  main: IGETClinicsLocatorMain;
}

export interface IClinicsLocatorPageGETDataPageContent {
  body: IGETClinicsLocatorBody;
}

export interface IClinicsLocatorPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IClinicsLocatorPageGETDataPageContent;
}

export interface IClinicsLocatorPageGETResponse {
  status: boolean;
  message: string;
  data: IClinicsLocatorPageGETResponseData;
}

/* GET ClinicLocatorpage static data ends */


/***********************************************************VETERINARY DOCTORS LOCATOR***************************************************************/

/* GET VeterinaryDoctors static data starts */

export interface IGETVeterinaryDoctorsMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}

export interface IGETVeterinaryDoctorsMain {
  meta: IGETVeterinaryDoctorsMeta;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };

  clinicLocator: {
    heading: string;
    subHeading: string;
    buttonText: string;
    mobileImage: string;
    desktopImage: string;
    searchBarHeading: string;
    cities: string[];
  };
  clinicLocations: {
    buttonText1: string;
    buttonText2: string;
  };
}
export interface IGETVeterinaryDoctorsBody {
  main: IGETVeterinaryDoctorsMain;
}

export interface IVeterinaryDoctorsPageGETDataPageContent {
  body: IGETVeterinaryDoctorsBody;
}

export interface IVeterinaryDoctorsPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IVeterinaryDoctorsPageGETDataPageContent;
}

export interface IVeterinaryDoctorsPageGETResponse {
  status: boolean;
  message: string;
  data: IVeterinaryDoctorsPageGETResponseData;
}

/* GET VeterinaryDoctorspage static data ends */


/***********************************************************Blog Posts API***************************************************************/

/* GET All Blog Posts APIs starts */
export interface IBlogPostsGETResponse {
  status: boolean;
  message: string;
  data: IBlogPostsGETResponseData[];
}
export interface IBlogPostsGETResponseData {
  title: string;
  og_url: string;
  og_image: string;
}
/* Get Blog Posts APIs data end */

/***********************************************************ALL DOCTORS API***************************************************************/
/* Get All Doctors APIs data start */
export interface IAllDoctorsGETResponse {
  status: boolean;
  message: string;
  data: IAllDoctorsGETResponseData[];
}
export interface IAllDoctorsGETResponseData {
  created_on: string;
  updated_on: string;
  id: string;
  name: string;
  description: string;
  experience: string;
  expertise: string;
  image_url: string;
  designation: string;
  specialities: string;
  staff_priority: number;
  vetbuddy_clinic_id: number;
  vetbuddy_clinic_name: string;
  vetbuddy_staff_category_id: number;
  vetbuddy_staff_category_name: string;
  email_id: string;
  status: boolean;
  service_id: string;
  rest_time_in_minutes: number;
  mobile: string;
  vetbuddy_added_on: string;
  vetbuddy_modify_on: string;
  vetbuddy_appointment_unique_id: string;
  display: boolean;
  slug: string;
  static_doctor: boolean;
  display_name: string;
}

/* Get All Doctors APIs data end */

/***********************************************************HOME PAGE***************************************************************/
/* GET HomePage static data starts */

export interface IGETMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
  schemaData?: any;
}

export interface IGETHomeMain {
  meta: IGETMeta;
  ogData: any;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };

  petLoveVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };

  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    subHeadingSpan5: string;
    mobileImage: string;
    desktopImage: string;
  };

  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };

  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      ClinicsImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}

export interface IGETHomeBody {
  main: IGETHomeMain;
}

export interface IHomePageGETDataPageContent {
  body: IGETHomeBody;
}

export interface IHomePageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IHomePageGETDataPageContent;
}

export interface IHomePageGETResponse {
  status: boolean;
  message: string;
  data: IHomePageGETResponseData;
}

/* GET Homepage static data ends */

/***********************************************************ABOUT US PAGE***************************************************************/
/* GET AboutUsPage static data starts */

export interface IGETAboutUsMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IAboutUsFaqData = {
  title: string;
  content: string;
};
export interface IAboutUsFaq {
  data: IAboutUsFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETAboutUsMain {
  meta: IGETAboutUsMeta;
  Faq: IAboutUsFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  descriptionSection: {
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  AboutUsSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    heading: string;
    subHeading1: string;
    subHeading2: string;
    bannerHeading1: string;
    bannerHeading2: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticStory: {
    heading1: string;
    heading2: string;
    subHeading1: string;
    subHeading2: string;
    mobileImage: string;
    desktopImage: string;
  };

  veticGrowth: {
    usp: Array<{
      image: string;
      heading: string;
      subHeading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeading: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticCommunity: {
    cardData: Array<{
      image: string;
      heading: string;
      subHeading: string;
    }>;
    heading: string;
  };
  joinVeticSection: {
    heading1: string;
    heading2: string;
    buttonText: string;
    mobileImage: string;
    desktopImage: string;
    imageButton1: string;
    imageButton2: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      serviceCardsData: string[];
    }>;
  };

  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      AboutUssImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}
export interface IGETAboutUsBody {
  main: IGETAboutUsMain;
}

export interface IAboutUsPageGETDataPageContent {
  body: IGETAboutUsBody;
}

export interface IAboutUsPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IAboutUsPageGETDataPageContent;
}

export interface IAboutUsPageGETResponse {
  status: boolean;
  message: string;
  data: IAboutUsPageGETResponseData;
}

/* GET AboutUspage static data ends */

/***********************************************************PET FOOD & ACCESSORIES PAGE***************************************************************/
/* GET PetFoodAccessoriesPage static data starts */

export interface IGETPetFoodAccessoriesMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IPetFoodAccessoriesFaqData = {
  title: string;
  content: string;
};
export interface IPetFoodAccessoriesFaq {
  data: IPetFoodAccessoriesFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETPetFoodAccessoriesMain {
  meta: IGETPetFoodAccessoriesMeta;
  Faq: IPetFoodAccessoriesFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };

  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  categories: {
    data: Array<{
      image: string;
      img_alt: string;
      product_name: string;
      className: string;
      categories_url_link: string;
    }>;
    categories_heading: string;
    categories_description: string;
  };
  brandsection: {
    data: Array<{
      image: string;
      img_alt: string;
      brand_link: string;
    }>;
    brand_heading: string;
    brand_description: string;
  };
  services: {
    data: Array<{
      image_laptop: string;
      image_mobile: string;
      img_alt_laptop: string;
      img_alt_mobile: string;
      services_heading: string;
      services_description: string;
    }>;
    services_main_heading: string;
    services_main_description: string;
  };
  trending_categories: {
    cards: Array<{
      image: string;
      price: string;
      heading: string;
      img_alt: string;
      cutPrice: string;
      discount: string;
      product_link: string;
    }>;
    heading: string;
    para: string;
  };
  download_now_btn: {
    download_now_btn_link: string;
    download_now_btn_content: string;
  };
  bannerSection: {
    heading: string;
    subHeading1: string;
    subHeading2: string;
    bannerHeading1: string;
    bannerHeading2: string;
    mobileImage: string;
    desktopImage: string;
  };
}
export interface IGETPetFoodAccessoriesBody {
  main: IGETPetFoodAccessoriesMain;
}

export interface IPetFoodAccessoriesPageGETDataPageContent {
  body: IGETPetFoodAccessoriesBody;
}

export interface IPetFoodAccessoriesPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IPetFoodAccessoriesPageGETDataPageContent;
}

export interface IPetFoodAccessoriesPageGETResponse {
  status: boolean;
  message: string;
  data: IPetFoodAccessoriesPageGETResponseData;
}

/* GET PetFoodAccessoriespage static data ends */

/***********************************************************OUR SERVICES PAGE***************************************************************/
/* GET OurServicesPage static data starts */

export interface IGETOurServicesMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IOurServicesFaqData = {
  title: string;
  content: string;
};
export interface IOurServicesFaq {
  data: IOurServicesFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETOurServicesMain {
  meta: IGETOurServicesMeta;
  Faq: IOurServicesFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  descriptionSection: {
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  AboutUsSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    usp: Array<{
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      serviceCardsData: string[];
    }>;
  };
  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      AboutUssImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}
export interface IGETOurServicesBody {
  main: IGETOurServicesMain;
}

export interface IOurServicesPageGETDataPageContent {
  body: IGETOurServicesBody;
}

export interface IOurServicesPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IOurServicesPageGETDataPageContent;
}

export interface IOurServicesPageGETResponse {
  status: boolean;
  message: string;
  data: IOurServicesPageGETResponseData;
}

/* GET OurServices page static data ends */

/***********************************************************CANCER CARE PAGE***************************************************************/
/* GET CancerCarePage static data starts */

export interface IGETCancerCareMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type ICancerCareFaqData = {
  title: string;
  content: string;
};
export interface ICancerCareFaq {
  data: ICancerCareFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETCancerCareMain {
  meta: IGETCancerCareMeta;
  Faq: ICancerCareFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };

  bannerSection: {
    usp: Array<{
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      serviceCardsData: string[];
    }>;
  };
  petCancerTreated: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      serviceCardsData: string[];
    }>;
  };
}
export interface IGETCancerCareBody {
  main: IGETCancerCareMain;
}

export interface ICancerCarePageGETDataPageContent {
  body: IGETCancerCareBody;
}

export interface ICancerCarePageGETResponseData {
  id: number;
  page_slug: string;
  page_content: ICancerCarePageGETDataPageContent;
}

export interface ICancerCarePageGETResponse {
  status: boolean;
  message: string;
  data: ICancerCarePageGETResponseData;
}

/* GET CancerCare page static data ends */

/***********************************************************CAREERS PAGE***************************************************************/
/* GET CareersPage static data starts */

export interface IGETCareersMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type ICareersFaqData = {
  title: string;
  content: string;
};
export interface ICareersFaq {
  data: ICareersFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETCareersMain {
  meta: IGETCareersMeta;
  Faq: ICareersFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  descriptionSection: {
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  AboutUsSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    usp: Array<{
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      serviceCardsData: string[];
    }>;
  };
  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      AboutUssImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}
export interface IGETCareersBody {
  main: IGETCareersMain;
}

export interface ICareersPageGETDataPageContent {
  body: IGETCareersBody;
}

export interface ICareersPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: ICareersPageGETDataPageContent;
}

export interface ICareersPageGETResponse {
  status: boolean;
  message: string;
  data: ICareersPageGETResponseData;
}

/* GET Careers page static data ends */

/***********************************************************Consultation PAGE***************************************************************/
/* GET Consultation Page static data starts */

export interface IGETConsultationMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IConsultationFaqData = {
  title: string;
  content: string;
};
export interface IConsultationFaq {
  data: IConsultationFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETConsultationMain {
  meta: IGETConsultationMeta;
  Faq: IConsultationFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
}

export interface IGETConsultationBody {
  main: IGETConsultationMain;
}

export interface IConsultationPageGETDataPageContent {
  body: IGETConsultationBody;
}

export interface IConsultationPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IConsultationPageGETDataPageContent;
}

export interface IConsultationPageGETResponse {
  status: boolean;
  message: string;
  data: IConsultationPageGETResponseData;
}
/* GET Consultation Page static data ends */

/***********************************************************Grooming PAGE***************************************************************/

/* GET GroomingPage static data starts */
export interface IGETGroomingMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IGroomingFaqData = {
  title: string;
  content: string;
};
export interface IGroomingFaq {
  data: IGroomingFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETGroomingMain {
  meta: IGETGroomingMeta;
  Faq: IGroomingFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
  ServicePackage: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    description: string;
    packageCards: Array<{
      icon?: string;
      cardHeading: string;
      image: string;
      price: string;
      timing: string;
      cutPrice: string;
      buttonText: string;
      priceContent: string;
      packageCardsData: string[];
    }>;
  };
}
export interface IGETGroomingBody {
  main: IGETGroomingMain;
}

export interface IGroomingPageGETDataPageContent {
  body: IGETGroomingBody;
}

export interface IGroomingPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IGroomingPageGETDataPageContent;
}

export interface IGroomingPageGETResponse {
  status: boolean;
  message: string;
  data: IGroomingPageGETResponseData;
}

/* GET Groomingpage static data ends */

/***********************************************************Clinic PAGE***************************************************************/
/* GET ClinicPage static data starts */

export interface IGETClinicMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IClinicFaqData = {
  title: string;
  content: string;
};
export interface IClinicFaq {
  data: IClinicFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETClinicMain {
  meta: IGETClinicMeta;
  Faq: IClinicFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };
  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      ClinicsImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}
export interface IGETClinicBody {
  main: IGETClinicMain;
}

export interface IClinicPageGETDataPageContent {
  body: IGETClinicBody;
}

export interface IClinicPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IClinicPageGETDataPageContent;
}

export interface IClinicPageGETResponse {
  status: boolean;
  message: string;
  data: IClinicPageGETResponseData;
}

/* GET Clinicpage static data ends */


/***********************************************************Clinic Details PAGE***************************************************************/
/* GET ClinicDetailsPage static data starts */

export interface IGETClinicDetailsMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
  schemaData?: any;
}
export type IClinicDetailsFaqData = {
  title: string;
  content: string;
};
export interface IClinicDetailsFaq {
  data: IClinicDetailsFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETClinicDetailsMain {
  meta: IGETClinicDetailsMeta;
  Faq: IClinicDetailsFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  ClinicServices: {
    clinicServicesCard: Array<{
      heading: string;
     
      image: string;
    }>;
    heading1: string;
    heading2: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  bannerSection: {
    clinicName1: string;
    clinicName2: string;
    clinicNameSubHeading: string;
    buttonText: string;
    location: string;
    gmbLocationLink: string;
    timigs: string;
    mobileImage: string;
    desktopImage: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };
  veticInfastructure: {
    button: {
      buttonText: string;
    };
    heading: string;
    buttonImages: {
      HoursCareImage: string[];
      RetailImage: string[];
      ClinicDetailssImage: string[];
      GroomingImage: string[];
      ExpertVetsImage: string[];
    };
  };
}
export interface IGETClinicDetailsBody {
  main: IGETClinicDetailsMain;
}

export interface IClinicDetailsPageGETDataPageContent {
  body: IGETClinicDetailsBody;
}

export interface IClinicDetailsPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IClinicDetailsPageGETDataPageContent;
}

export interface IClinicDetailsPageGETResponse {
  status: boolean;
  message: string;
  data: IClinicDetailsPageGETResponseData;
}

/* GET ClinicDetailspage static data ends */

/***********************************************************Vaccination PAGE***************************************************************/
/* GET Vaccination Page static data starts */

export interface IGETVaccinationMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IVaccinationFaqData = {
  title: string;
  content: string;
};
export interface IVaccinationFaq {
  data: IVaccinationFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETVaccinationMain {
  meta: IGETVaccinationMeta;
  Faq: IVaccinationFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  ServicePackage: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    description: string;
    packageCards: Array<{
      icon?: string;
      cardHeading: string;
      image: string;
      price: string;
      timing: string;
      cutPrice: string;
      buttonText: string;
      priceContent: string;
      packageCardsData: string[];
    }>;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
}

export interface IGETVaccinationBody {
  main: IGETVaccinationMain;
}

export interface IVaccinationPageGETDataPageContent {
  body: IGETVaccinationBody;
}

export interface IVaccinationPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IVaccinationPageGETDataPageContent;
}

export interface IVaccinationPageGETResponse {
  status: boolean;
  message: string;
  data: IVaccinationPageGETResponseData;
}
/* GET Vaccination Page static data ends */

/***********************************************************Emergency PAGE***************************************************************/
/* GET Emergency Page static data starts */

export interface IGETEmergencyMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IEmergencyFaqData = {
  title: string;
  content: string;
};
export interface IEmergencyFaq {
  data: IEmergencyFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETEmergencyMain {
  meta: IGETEmergencyMeta;
  Faq: IEmergencyFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  recoveryVideoSection: {
    heading: string;
    subHeading: string;
    videoLink: string;
  };
  petEmergencies: {
    emergencies: Array<{
      icon: string;
      cardHeading: string;
      cardDescription: string;
    }>;
    heading: string;
    subHeading: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
}

export interface IGETEmergencyBody {
  main: IGETEmergencyMain;
}

export interface IEmergencyPageGETDataPageContent {
  body: IGETEmergencyBody;
}

export interface IEmergencyPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IEmergencyPageGETDataPageContent;
}

export interface IEmergencyPageGETResponse {
  status: boolean;
  message: string;
  data: IEmergencyPageGETResponseData;
}
/* GET Emergency Page static data ends */

/***********************************************************Surgery PAGE***************************************************************/
/* GET Surgery Page static data starts */

export interface IGETSurgeryMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type ISurgeryFaqData = {
  title: string;
  content: string;
};
export interface ISurgeryFaq {
  data: ISurgeryFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETSurgeryMain {
  meta: IGETSurgeryMeta;
  Faq: ISurgeryFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  doctorSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };
  recoveryVideoSection: {
    heading: string;
    subHeading: string;
    videoLink: string;
  };
  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
}

export interface IGETSurgeryBody {
  main: IGETSurgeryMain;
}

export interface ISurgeryPageGETDataPageContent {
  body: IGETSurgeryBody;
}

export interface ISurgeryPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: ISurgeryPageGETDataPageContent;
}

export interface ISurgeryPageGETResponse {
  status: boolean;
  message: string;
  data: ISurgeryPageGETResponseData;
}
/* GET Surgery Page static data ends */

/***********************************************************Diagnostic PAGE***************************************************************/
/* GET Diagnostic Page static data starts */

export interface IGETDiagnosticMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export type IDiagnosticFaqData = {
  title: string;
  content: string;
};
export interface IDiagnosticFaq {
  data: IDiagnosticFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export interface IGETDiagnosticMain {
  meta: IGETDiagnosticMeta;
  Faq: IDiagnosticFaq;
  pageCategory: string;
  appDownloadBar: {
    heading: string;
  };
  appBanner: {
    heading1: string;
    heading2: string;
    mobileImage: string;
    desktopImage: string;
    appleStoreImage: string;
    androidStoreImage: string;
    appBannerContent: Array<{
      heading: string;
    }>;
  };
  whyChooseVetic: {
    card: Array<{
      heading: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
    }>;
    heading: string;
    subHeading1: string;
    subHeading2: string;
  };
  clinicSection: {
    image: string;
    heading1: string;
    heading2: string;
    heading3: string;
    buttonText: string;
  };

  veticServices: {
    image: string;
    heading: string;
    buttonText: string;
    subHeading: string;
    cardHeading: string;
    cardSubHeading: string;
    serviceCards: Array<{
      icon: string;
      cardHeading: string;
      buttonText: string;
      cardDescription: string;
      serviceCardsData: string[];
    }>;
  };
  testimonials: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  bannerSection: {
    usp: Array<{
      uspIcon: string;
      heading: string;
    }>;
    heading1: string;
    heading2: string;
    buttonText: string;
    subHeadingSpan1: string;
    subHeadingSpan2: string;
    subHeadingSpan3: string;
    subHeadingSpan4: string;
    mobileImage: string;
    desktopImage: string;
  };
}

export interface IGETDiagnosticBody {
  main: IGETDiagnosticMain;
}

export interface IDiagnosticPageGETDataPageContent {
  body: IGETDiagnosticBody;
}

export interface IDiagnosticPageGETResponseData {
  id: number;
  page_slug: string;
  page_content: IDiagnosticPageGETDataPageContent;
}

export interface IDiagnosticPageGETResponse {
  status: boolean;
  message: string;
  data: IDiagnosticPageGETResponseData;
}
/* GET Diagnostic Page static data ends */



/***********************************************************MARKETING PAGES***************************************************************/

/********************************************************** Meta New Website Page  *******************************************************/
/* Get Meta New data starts */
export interface IMetaNewGETResponse {
  status: boolean;
  message: string;
  data: IMetaNewGETResponseData;
}
export interface IMetaNewGETResponseData {
  id: number;
  page_slug: string;
  page_content: IMetaNewGETDataPageContent;
}
export interface IMetaNewGETDataPageContent {
  body: IGETMetaNewBody;
}
export interface IGETMetaNewBody {
  main: IGETMetaNewMain;
}
export interface IGETMetaNewMain {
  Faq: IMetaNewFaq;
  meta: IMetaNewMeta;
  ClinicsDataStatic:any;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: string[];
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
    imageSubHeadingCutPrice: string;
  };
  veticServices: {
    heading: string;
    servicesComponent: Array<{
      heading: string;
      description: string;
      image: string;
      color: string;
    }>;
  };
  aboutSection: {
    heading: string;
    aboutSliderData: Array<{
      heading: string;
      description: string;
    }>;
    aboutBannerImage: string;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IMetaNewMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IMetaNewFaq {
  FAQ: IMetaNewFaqData[];
  data: IMetaNewFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IMetaNewFaqData = {
  title: string;
  content: string;
};
/* Get Meta New data ends */


/********************************************************** Plum Website Page  *******************************************************/
/* Get Plum data starts */
export interface IPlumGETResponse {
  status: boolean;
  message: string;
  data: IPlumGETResponseData;
}
export interface IPlumGETResponseData {
  id: number;
  page_slug: string;
  page_content: IPlumGETDataPageContent;
}
export interface IPlumGETDataPageContent {
  body: IGETPlumBody;
}
export interface IGETPlumBody {
  main: IGETPlumMain;
}
export interface IGETPlumMain {
  Faq: IPlumFaq;
  meta: IPlumMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: string[];
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
    imageSubHeadingCutPrice: string;
  };
  veticServices: {
    heading: string;
    servicesComponent: Array<{
      heading: string;
      description: string;
      image: string;
      color: string;
    }>;
  };
  aboutSection: {
    heading: string;
    aboutSliderData: Array<{
      heading: string;
      description: string;
    }>;
    aboutBannerImage: string;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IPlumMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IPlumFaq {
  FAQ: IPlumFaqData[];
  data: IPlumFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IPlumFaqData = {
  title: string;
  content: string;
};
/* Get Plum data ends */



/********************************************************** Insurance New Website Page  *******************************************************/
/* Get Insurance New data starts */
export interface IInsuranceGETResponse {
  status: boolean;
  message: string;
  data: IInsuranceGETResponseData;
}
export interface IInsuranceGETResponseData {
  id: number;
  page_slug: string;
  page_content: IInsuranceGETDataPageContent;
}
export interface IInsuranceGETDataPageContent {
  body: IGETMetaNewBody;
}
export interface IGETInsuranceBody {
  main: IGETInsuranceMain;
}
export interface IGETInsuranceMain {
  Faq: IInsuranceFaq;
  meta: IInsuranceMeta;
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    SubHeading: string,
    buttonText:string,
    subHeading: string,
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
    imageSubHeadingCutPrice: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    mailId: string
    heading: string;
    image_url: string;
    description: string;
    description1: string;
    buttonText: string;
  };
  InsuranceCards: {
    card: Array<{
      heading: string;
      buttonText: string;
      subHeading: string;
      mobileImage: string;
      desktopImage: string;
      serviceIncludes: string[];
    }>
  };
  InsuranceFeatures:{
    heading: string;
    buttonText: string;
    mobileImage: string;
    servicesComponent:Array<{
      heading: string;
      description: string;
    }>
  }
  pageCategory: string;
}
export interface IInsuranceMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IInsuranceFaq {
  FAQ: IInsuranceFaqData[];
  data: IInsuranceFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IInsuranceFaqData = {
  title: string;
  content: string;
};
/* Get Insurance New data ends */



/***********************************************************Marketing Dynamic PAGES***************************************************************/

/* Get slug Consultation dynamic data starts */
export interface IConsultationSlugGETResponse {
  status: boolean;
  message: string;
  data: IConsultationSlugGETResponseData;
}
export interface IConsultationSlugGETResponseData {
  id: number;
  page_slug: string;
  page_content: IConsultationSlugGETDataPageContent;
}
export interface IConsultationSlugGETDataPageContent {
  body: IGETConsultationSlugBody;
}
export interface IGETConsultationSlugBody {
  main: IGETConsultationSlugMain;
}
export interface IGETConsultationSlugMain {
  Faq: IConsultationSlugFaq;
  meta: IConsultationSlugMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: string[];
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
    imageSubHeadingCutPrice: string;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IConsultationSlugMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IConsultationSlugFaq {
  FAQ: IConsultationSlugFaqData[];
  data: IConsultationSlugFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IConsultationSlugFaqData = {
  title: string;
  content: string;
  question?: string;
  answer?: string;
};
/* Get slug consultation dynamic data ends */

/* Get slug Grooming dynamic data starts */
export interface IGroomingSlugGETResponse {
  status: boolean;
  message: string;
  data: IGroomingSlugGETResponseData;
}
export interface IGroomingSlugGETResponseData {
  id: number;
  page_slug: string;
  page_content: IGroomingSlugGETDataPageContent;
}
export interface IGroomingSlugGETDataPageContent {
  body: IGETGroomingSlugBody;
}
export interface IGETGroomingSlugBody {
  main: IGETGroomingSlugMain;
}
export interface IGETGroomingSlugMain {
  Faq: IGroomingSlugFaq;
  meta: IGroomingSlugMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: string[];
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
  };
  groomerSection: {
    heading: string;
    groomersData: Array<{
      name: string;
      rating: string;
      image_url: string;
      experience: string;
      total_grooming: string;
    }>;
    groomerBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IGroomingSlugMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}

export interface IGroomingSlugFaq {
  FAQ?: IGroomingSlugFaqData[];
  data: IGroomingSlugFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IGroomingSlugFaqData = {
  title: string;
  content: string;
  question?: string;
  answer?: string;
};
/* Get slug Grooming dynamic data ends */

/* Get slug Brand dynamic data starts */
export interface IBrandSlugGETResponse {
  status: boolean;
  message: string;
  data: IBrandSlugGETResponseData;
}
export interface IBrandSlugGETResponseData {
  id: number;
  page_slug: string;
  page_content: IBrandSlugGETDataPageContent;
}
export interface IBrandSlugGETDataPageContent {
  body: IGETBrandSlugBody;
}
export interface IGETBrandSlugBody {
  main: IGETBrandSlugMain;
}
export interface IGETBrandSlugMain {
  Faq: IBrandSlugFaq;
  meta: IBrandSlugMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: string[];
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    imageSubHeading: string;
    imageSubHeadingCutPrice: string;
  };
  veticServices: {
    heading: string;
    servicesComponent: Array<{
      heading: string;
      description: string;
      image: string;
      color: string;
    }>;
  };
  aboutSection: {
    heading: string;
    aboutSliderData: Array<{
      heading: string;
      description: string;
    }>;
    aboutBannerImage: string;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IBrandSlugMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IBrandSlugFaq {
  FAQ: IBrandSlugFaqData[];
  data: IBrandSlugFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IBrandSlugFaqData = {
  title: string;
  content: string;
};
/* Get slug Brand dynamic data ends */

/* Get slug Surgery dynamic data starts */
export interface ISurgerySlugGETResponse {
  status: boolean;
  message: string;
  data: ISurgerySlugGETResponseData;
}
export interface ISurgerySlugGETResponseData {
  id: number;
  page_slug: string;
  page_content: ISurgerySlugGETDataPageContent;
}
export interface ISurgerySlugGETDataPageContent {
  body: IGETSurgerySlugBody;
}
export interface IGETSurgerySlugBody {
  main: IGETSurgerySlugMain;
}
export interface IGETSurgerySlugMain {
  Faq: ISurgerySlugFaq;
  meta: ISurgerySlugMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  ServiceCards: {
    card: Array<{
      price: string;
      cutPrice: string;
      discount: string;
      cardTitle: string;
      mobileImage: string;
      desktopImage: string;
      timeDuraction: string;
      serviceIncludes: Array<{
        content: string;
        price: string;
        cutPrice: string;
      }>;
      serviceInclusion: string;
      serviceInclusionText: string;
      buttonText: string;
    }>;
    cardNotes: string;
    headingForCard: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    discountContent: string;
    imageSubHeading: string;
    imageSubHeadingPrice: string;
    imageSubHeadingCutPrice: string;
  };
  veticServices: {
    heading: string;
    servicesComponent: Array<{
      heading: string;
      description?: string;
      image: string;
      color: string;
    }>;
  };
  petSurgeryTable: {
    vetic: string;
    others: string;
    feature: string;
    heading: string;
    PetSurgeryTableComponent: Array<{
      image: string;
      heading: string;
      description?: string;
    }>;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface ISurgerySlugMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface ISurgerySlugFaq {
  FAQ: ISurgerySlugFaqData[];
  data: ISurgerySlugFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type ISurgerySlugFaqData = {
  title: string;
  content: string;
};
/* Get slug Surgery dynamic data ends */

/* Get slug Vaccination dynamic data starts */
export interface IVaccinationSlugGETResponse {
  status: boolean;
  message: string;
  data: IVaccinationSlugGETResponseData;
}
export interface IVaccinationSlugGETResponseData {
  id: number;
  page_slug: string;
  page_content: IVaccinationSlugGETDataPageContent;
}
export interface IVaccinationSlugGETDataPageContent {
  body: IGETSurgerySlugBody;
}
export interface IGETVaccinationSlugBody {
  main: IGETSurgerySlugMain;
}
export interface IGETVaccinationSlugMain {
  Faq: IVaccinationSlugFaq;
  meta: IVaccinationSlugMeta;
  Clinics: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    clinicBannerImage: string;
    buttonText: string;
  };
  section8: {
    [x: string]: any;
    testimonialData: Array<{
      alt: string;
      image: string;
      content: string;
      petName: string;
      petOwner: string;
      google_rating: string;
    }>;
    heading: string;
    rating: string;
    ratingData: string;
  };
  ContactUs: {
    heading: string;
    image_url: string;
    description: string;
    buttonText: string;
  };
  BannerSection: {
    usp: Array<{
      logo: string;
      heading: string;
    }>;
    heading: string;
    discount: string;
    laptopImage: string;
    mobileImage: string;
    discountContent: string;
    imageSubHeading: string;
    imageSubHeadingPrice: string;
    imageSubHeadingCutPrice: string;
  };
  vaccinationServices: {
    heading: string;
    mobileImage: string;
    servicesComponent: Array<{
      heading: string;
      description: string;
    }>;
  };
  petSurgeryTable: {
    vetic: string;
    others: string;
    feature: string;
    heading: string;
    PetSurgeryTableComponent: Array<{
      image: string;
      heading: string;
      description?: string;
    }>;
  };
  catVaccinationCard: {
    heading: string;
    buttonText: string;
    mobileImage: string;
    vaccinationDetails: Array<{
      price: string;
      content: string;
      cutPrice: string;
    }>;
  };
  dogVaccinationCard: {
    heading: string;
    buttonText: string;
    mobileImage: string;
    vaccinationDetails: Array<{
      price: string;
      content: string;
      cutPrice: string;
    }>;
  };
  doctorSection: {
    heading: string;
    doctorBannerImage: string;
    description?: string;
    buttonText: string;
  };
  pageCategory: string;
}
export interface IVaccinationSlugMeta {
  title: string;
  location: string;
  srNumber: string;
  description: string;
  canonicalTag: string;
}
export interface IVaccinationSlugFaq {
  FAQ: ISurgerySlugFaqData[];
  data: ISurgerySlugFaqData[];
  heading: string;
  subHeading: string;
  headingSpan: string;
}
export type IVaccinationSlugFaqData = {
  title: string;
  content: string;
};
/* Get slug vaccination dynamic data ends */