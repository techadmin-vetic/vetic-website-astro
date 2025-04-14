import type {
  IGETAllClinicsResult,
  IGETHomeMain,
  IGETAboutUsMain,
  IGETPetFoodAccessoriesMain,
  IGETOurServicesMain,
  IGETCancerCareMain,
  IGETCareersMain,
  IGETGroomingMain,
  IGETClinicMain,
  IGETClinicDetailsMain,
  IGETConsultationMain,
  IGETVaccinationMain,
  IGETClinicsLocatorMain,
  IGETVeterinaryDoctorsMain,
  IGETEmergencyMain,
  IGETSurgeryMain,
  IGETDiagnosticMain,
  IGETMetaNewMain,
  IGETPlumMain,
  IGETInsuranceMain,
  IGETBrandSlugMain,
  IGETConsultationSlugMain,
  IGETGroomingSlugMain,
  IGETSurgerySlugMain,
  IGETVaccinationSlugMain,

} from "@api/api_modals";

/*********************************************************** All Doctors ***************************************************************/
export interface IAllDoctorsCarouselProps {
  location: string;
  heading: string;
  variant?: "NEW" | "OLD";
  headingSuffix?: string;
  hideHeading?: string;
}

/*********************************************************** All Clinics ***************************************************************/

export interface IAllClinicsPageProps {
  location: string;
  heading: string;
  headingSuffix?: string;
  hideHeading?: string;
}

export interface IAllClinicsPageProps extends IGETAllClinicsResult {}

/*********************************************************** Website Home Page ***************************************************************/
export interface IHomePageProps {
  content: IGETHomeMain;
  location: string;
  srNumber: string;
  isHomePage?:any;
  isEmergencyPage?:any;
}
export interface IHomePageProps extends IGETHomeMain {}

/*********************************************************** Website About us Page ***************************************************************/
export interface IAboutUsPageProps {
  content: IGETAboutUsMain;
  location: string;
  srNumber: string;
  isAboutUsPage?: any;
}
export interface IAboutUsPageProps extends IGETAboutUsMain {}

/********************************************* Website pet food and accessories Page ***************************************************************/
export interface IPetFoodAccessoriesPageProps {
  content: IGETPetFoodAccessoriesMain;
  location: string;
  srNumber: string;
  showVideo: boolean;
}
export interface IPetFoodAccessoriesPageProps extends IGETPetFoodAccessoriesMain {}

/******************************************************** Website Clinics Locator Page ***************************************************************/
export interface IClinicsLocatorPageProps {
  content: IGETClinicsLocatorMain;
  location: string;
  srNumber: string;
}
export interface IClinicsLocatorPageProps extends IGETClinicsLocatorMain {}

/*********************************************** Website Vererinary Doctors Locator Page ***********************************************************/
export interface IVeterinaryDoctorsPageProps {
  content: IGETVeterinaryDoctorsMain;
  location: string;
  srNumber: string;
}
export interface IVeterinaryDoctorsPageProps extends IGETVeterinaryDoctorsMain {}

/***************************************************** Website Our Services Page ***************************************************************/
export interface IOurServicesPageProps {
  content: IGETOurServicesMain;
  location: string;
  srNumber: string;
}
export interface IOurServicesPageProps extends IGETOurServicesMain {}

/******************************************************** Website Cancer Care Page ***************************************************************/
export interface ICancerCarePageProps {
  content: IGETCancerCareMain;
  location: string;
  srNumber: string;
  isCancerCarePage?:any;
}
export interface IOurCancerCareProps extends IGETCancerCareMain {}

/*********************************************************** Website Careers Page ***************************************************************/
export interface ICareersPageProps {
  content: IGETCareersMain;
  location: string;
  srNumber: string;
  isCareersPage?:any;
}
export interface ICareersProps extends IGETCareersMain {}
/*********************************************************** Website Grooming Page ***************************************************************/
export interface IGroomingPageProps {
  content: IGETGroomingMain;
  location: string;
  srNumber: string;
}
export interface IGroomingPageProps extends IGETGroomingMain {}

/*********************************************************** Website Clinics Page ***************************************************************/
export interface IClinicPageProps {
  content: IGETClinicMain;
  location: string;
  srNumber: string;
}
export interface IGroomingPageProps extends IGETClinicMain {}

/*********************************************************** Website Clinics Details Page ***************************************************************/
export interface IClinicDetailsPageProps {
  content: IGETClinicDetailsMain;
  location: string;
  srNumber: string;
}
export interface IClinicDetailsPageProps extends IGETClinicDetailsMain {}

/*********************************************************** Website Consultation Page ***************************************************************/
export interface IConsultationPageProps {
  content: IGETConsultationMain;
  location: string;
  srNumber: string;
}
export interface IConsultationPageProps extends IGETConsultationMain {}

/*********************************************************** Website Vaccination Page ***************************************************************/
export interface IVaccinationPageProps {
  content: IGETVaccinationMain;
  location: string;
  srNumber: string;
}
export interface IVaccinationPageProps extends IGETVaccinationMain {}

/*********************************************************** Website Emergency Page ***************************************************************/
export interface IEmergencyPageProps {
  content: IGETEmergencyMain;
  location: string;
  srNumber: string;
  showVideo: boolean;
  isEmergencyPage?:any;
}
export interface IEmergencyPageProps extends IGETEmergencyMain {}

/*********************************************************** Website Surgery Page ***************************************************************/
export interface ISurgeryPageProps {
  content: IGETSurgeryMain;
  location: string;
  srNumber: string;
  showVideo: boolean;
}
export interface ISurgeryPageProps extends IGETSurgeryMain {}

/*********************************************************** Website Diagnostic Page ***************************************************************/
export interface IDiagnosticPageProps {
  content: IGETDiagnosticMain;
  location: string;
  srNumber: string;
}
export interface IDiagnosticPageProps extends IGETDiagnosticMain {}


/*********************************************************** Marketing Page ***************************************************************/

/*********************************************************** Meta Website Page ***************************************************************/
export interface IMetaNewPageProps {
  content: IGETMetaNewMain;
  location: string;
  srNumber: string;
}
/*********************************************************** Plum Website Page ***************************************************************/
export interface IPlumPageProps {
  content: IGETPlumMain;
  location: string;
  srNumber: string;
}

/*********************************************************** Insurance Website Page ***************************************************************/
export interface IInsurancePageProps {
  content: IGETInsuranceMain;
  location: string;
  srNumber: string;
}

/*********************************************************** Brand Marketing Website Page ***************************************************************/
export interface IBrandSlugPageProps {
  content: IGETBrandSlugMain;
  location: string;
  srNumber: string;
}
export interface IBrandSlugPageProps extends IGETBrandSlugMain {}

/***********************************************************Consultation Page ***************************************************************/

export interface IConsultationSlugPageProps {
  content: IGETConsultationSlugMain;
  location: string;
  srNumber: string;
}
export interface IConsultationSlugPageProps extends IGETConsultationSlugMain {}

/***********************************************************Grooming Page ***************************************************************/

export interface IGroomingSlugPageProps {
  content: IGETGroomingSlugMain;
  location: string;
  srNumber: string;
}
export interface IGroomingSlugPageProps extends IGETGroomingSlugMain {}

/***********************************************************Surgery Page ***************************************************************/

export interface ISurgerySlugPageProps {
  content: IGETSurgerySlugMain;
  location: string;
  srNumber: string;
}
export interface ISurgerySlugPageProps extends IGETSurgerySlugMain {}
/***********************************************************Vaccination Page ***************************************************************/

export interface IVaccinationSlugPageProps {
  content: IGETVaccinationSlugMain;
  location: string;
  srNumber: string;
}
export interface IVaccinationSlugPageProps extends IGETVaccinationSlugMain {}

/*********************************************************** end ***************************************************************/
