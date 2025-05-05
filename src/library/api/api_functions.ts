import { SITE_APIS } from "./api";
import type {
  IBlogPostsGETResponse,
  IAllClinicsGETResponse,
  IAllDoctorsGETResponse,
  IHomePageGETResponse,
  IAboutUsPageGETResponse,
  IPetFoodAccessoriesPageGETResponse,
  IOurServicesPageGETResponse,
  ICancerCarePageGETResponse,
  ICareersPageGETResponse,
  IClinicPageGETResponse,
  IGroomingPageGETResponse,
  IVaccinationPageGETResponse,
  IConsultationPageGETResponse,
  IClinicsLocatorPageGETResponse,
  IVeterinaryDoctorsPageGETResponse,
  IEmergencyPageGETResponse,
  ISurgeryPageGETResponse,
  IDiagnosticPageGETResponse,
  IClinicDetailsPageGETResponse,
  IPlumGETResponse,
  IMetaNewGETResponse,
  IInsuranceGETResponse
  
} from "./api_modals";

/**********************************************************ALL CLINICS***************************************************************/

/* GET All Clinics API Function starts */
export const GETAllClinicsSiteData =
  async (): Promise<IAllClinicsGETResponse> => {
    const response: IAllClinicsGETResponse = await fetch(
      SITE_APIS.ALL_CLINICS
    ).then(async (res) => await res.json());
    return response;
  };
/* GET All Clinics API Function ends */

/**********************************************************BLOG POSTS***************************************************************/

/* GET All Clinics API Function starts */
export const GETBlogPostsSiteData =
  async (): Promise<IBlogPostsGETResponse> => {
    const response: IBlogPostsGETResponse = await fetch(
      SITE_APIS.BLOGPOSTS
    ).then(async (res) => await res.json());
    return response;
  };
/* GET All Clinics API Function ends */

/*************************************************************ALL DOCTORS***********************************************************/

/* GET All Doctors API Function starts */
export const GETAllDoctorsSiteData =
  async (): Promise<IAllDoctorsGETResponse> => {
    const response: IAllDoctorsGETResponse = await fetch(
      SITE_APIS.ALL_DOCTORS
    ).then(async (res) => await res.json());
    return response;
  };
/* GET All Doctors API Function ends */


/****************************************************ALL DOCTORS CITYWISE************************************************************/

/* GET All Doctors data by location API Function starts */
export const GETAllDoctorsSiteDataByLocation = async (
  location: string
): Promise<IAllDoctorsGETResponse> => {
  const response: IAllDoctorsGETResponse = await fetch(
    `${SITE_APIS.LOCATIONWISE_ALL_DOCTORS}${location}`
  ).then(async (res) => await res.json());
  return response;
};
/* GET All Doctors data by location API Function ends */

/*************************************************************HOME PAGE***********************************************************/
export const GETHomepageSiteData = async (): Promise<IHomePageGETResponse> => {
  const response: IHomePageGETResponse = await fetch(SITE_APIS.HOMEPAGE).then(
    async (res) => await res.json()
  );
  return response;
};

/*************************************************************ABOUT US PAGE***********************************************************/
export const GETAboutUspageSiteData =
  async (): Promise<IAboutUsPageGETResponse> => {
    const response: IAboutUsPageGETResponse = await fetch(
      SITE_APIS.ABOUTUSPAGE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************PET FOOD ACCESSORIES PAGE***********************************************************/
export const GETPetFoodAccessoriespageSiteData =
  async (): Promise<IPetFoodAccessoriesPageGETResponse> => {
    const response: IPetFoodAccessoriesPageGETResponse = await fetch(
      SITE_APIS.PETFOODACCESSORIESPAGE
    ).then(async (res) => await res.json());
    return response;
  };
/*************************************************************PET FOOD ACCESSORIES NEW PAGE***********************************************************/
export const GETPetFoodAccessoriesNewpageSiteData =
  async (): Promise<IPetFoodAccessoriesPageGETResponse> => {
    const response: IPetFoodAccessoriesPageGETResponse = await fetch(
      SITE_APIS.PETFOODACCESSORIESNEWPAGE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************OUR SERVICES PAGE***********************************************************/
export const GETOurServicespageSiteData =
  async (): Promise<IOurServicesPageGETResponse> => {
    const response: IOurServicesPageGETResponse = await fetch(
      SITE_APIS.OURSERVICES
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CANCER CARE PAGE***********************************************************/
export const GETCancerCarepageSiteData =
  async (): Promise<ICancerCarePageGETResponse> => {
    const response: ICancerCarePageGETResponse = await fetch(
      SITE_APIS.CANCERCARE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CAREERS PAGE***********************************************************/
export const GETCareerspageSiteData =
  async (): Promise<ICareersPageGETResponse> => {
    const response: ICareersPageGETResponse = await fetch(
      SITE_APIS.CAREERSPAGE
    ).then(async (res) => await res.json());
    return response;
  };


/*************************************************************GROOMING PAGE***********************************************************/
export const GETGroomingpageSiteData =
  async (): Promise<IGroomingPageGETResponse> => {
    const response: IGroomingPageGETResponse = await fetch(
      SITE_APIS.GROOMINGPAGE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CLINICS PAGE***********************************************************/
export const GETClinicpageSiteData =
  async (): Promise<IClinicPageGETResponse> => {
    const response: IClinicPageGETResponse = await fetch(
      SITE_APIS.CLINICPAGE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CLINICS LOCATOR***********************************************************/
export const GETClinicsLocatorpageSiteData =
  async (): Promise<IClinicsLocatorPageGETResponse> => {
    const response: IClinicsLocatorPageGETResponse = await fetch(
      SITE_APIS.CLINICSLOCATOR
    ).then(async (res) => await res.json());
    return response;
  };
/*************************************************************VETERINARY DOCTORS LOCATOR***********************************************************/
export const GETVeterinaryDoctorspageSiteData =
  async (): Promise<IVeterinaryDoctorsPageGETResponse> => {
    const response: IVeterinaryDoctorsPageGETResponse = await fetch(
      SITE_APIS.VETENIARYDOCTORS
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************Vaccination PAGE***********************************************************/
export const GETVaccinationpageSiteData =
  async (): Promise<IVaccinationPageGETResponse> => {
    const response: IVaccinationPageGETResponse = await fetch(
      SITE_APIS.VACCINATIONPAGE
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CLINICS NEAR ME PAGE***********************************************************/
export const GETClinicNearMepageSiteData =
  async (): Promise<IClinicPageGETResponse> => {
    const response: IClinicPageGETResponse = await fetch(
      SITE_APIS.CLINICNEARME
    ).then(async (res) => await res.json());
    return response;
  };
/*************************************************************CLINICS DETAILS PAGE***********************************************************/
export const GETClinicDetailspageSiteData =
  async (): Promise<IClinicDetailsPageGETResponse> => {
    const response: IClinicDetailsPageGETResponse = await fetch(
      SITE_APIS.CLINICDETAILS
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CONSULTATION PAGE***********************************************************/
export const GETConsultationpageSiteData =
  async (): Promise<IConsultationPageGETResponse> => {
    const response: IConsultationPageGETResponse = await fetch(
      SITE_APIS.CONSULTATIONPAGE
    ).then(async (res) => await res.json());
    return response;
  };


/*************************************************************GROOMING NEAR ME PAGE***********************************************************/
export const GETGroomingNearMepageSiteData =
  async (): Promise<IGroomingPageGETResponse> => {
    const response: IGroomingPageGETResponse = await fetch(
      SITE_APIS.GROOMINGNEARME
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************CONSULTATION NEAR ME PAGE***********************************************************/
export const GETConsultationNearMepageSiteData =
  async (): Promise<IConsultationPageGETResponse> => {
    const response: IConsultationPageGETResponse = await fetch(
      SITE_APIS.CONSULTATIONNEARME
    ).then(async (res) => await res.json());
    return response;
  };

/*************************************************************Vaccination NEAR ME PAGE***********************************************************/
export const GETVaccinationNearMepageSiteData =
  async (): Promise<IVaccinationPageGETResponse> => {
    const response: IVaccinationPageGETResponse = await fetch(
      SITE_APIS.VACCINATIONNEARME
    ).then(async (res) => await res.json());
    return response;
  };

  /*************************************************************EMERGENCY PAGE***********************************************************/
export const GETEmergencypageSiteData =
async (): Promise<IEmergencyPageGETResponse> => {
  const response: IEmergencyPageGETResponse = await fetch(
    SITE_APIS.EMERGENCYPAGE
  ).then(async (res) => await res.json());
  return response;
};

/*************************************************************SURGERY PAGE***********************************************************/
export const GETSurgerypageSiteData =
  async (): Promise<ISurgeryPageGETResponse> => {
    const response: ISurgeryPageGETResponse = await fetch(
      SITE_APIS.SURGERYPAGE
    ).then(async (res) => await res.json());
    return response;
  };

  /*************************************************************DIAGNOSTIC PAGE***********************************************************/
  export const GETDiagnosticpageSiteData =
  async (): Promise<IDiagnosticPageGETResponse> => {
    const response: IDiagnosticPageGETResponse = await fetch(
      SITE_APIS.DIAGNOSTICPAGE
    ).then(async (res) => await res.json());
    return response;
  };


/*************************************************************MARKETING PAGES***********************************************************/


/**************************************************** LOOP-WEBSITE-PAGE ************************************************************/

/* GET Loop data API Function starts */
export const GETLoopSiteData = async (): Promise<IPlumGETResponse> => {
  const response: IPlumGETResponse = await fetch(SITE_APIS.LOOP).then(
    async (res) => await res.json()
  );
  return response;
};

/**************************************************** META-WEBSITE-PAGE ************************************************************/

/* GET Meta data API Function starts */
export const GETMetaNewSiteData = async (): Promise<IMetaNewGETResponse> => {
  const response: IMetaNewGETResponse = await fetch(SITE_APIS.META).then(
    async (res) => await res.json()
  );
  return response;
};
/* GET Meta data API Function ends */
/**************************************************** PLUM-WEBSITE-PAGE ************************************************************/

/* GET Plum data API Function starts */
export const GETPlumSiteData = async (): Promise<IPlumGETResponse> => {
  const response: IPlumGETResponse = await fetch(SITE_APIS.PLUM).then(
    async (res) => await res.json()
  );
  return response;
};
/* GET Plum data API Function ends */
/**************************************************** INSURANCE-WEBSITE-PAGE ************************************************************/

/* GET Insurance data API Function starts */
export const GETInsuranceSiteData =
  async (): Promise<IInsuranceGETResponse> => {
    const response: IInsuranceGETResponse = await fetch(
      SITE_APIS.INSURANCE
    ).then(async (res) => await res.json());
    return response;
  };
/* GET Insurance data API Function ends */

/**************************************************** CARS24-WEBSITE-PAGE ************************************************************/
export const GETCars24Data = async (): Promise<IPlumGETResponse> => {
  const response: IPlumGETResponse = await fetch(SITE_APIS.CARS24).then(
    async (res) => await res.json()
  );
  return response;
};
/* GET Cars24 data API Function ends */
/**************************************************** HAPPY-LOCATE-WEBSITE-PAGE ************************************************************/
export const GETHappyLocateData = async (): Promise<IPlumGETResponse> => {
  const response: IPlumGETResponse = await fetch(SITE_APIS.HAPPYLOCATE).then(
    async (res) => await res.json()
  );
  return response;
};
/* GET HAPPYLOCATE data API Function ends */
/**************************************************** ADSURE-WEBSITE-PAGE ************************************************************/
export const GETAdsureData = async (): Promise<IPlumGETResponse> => {
  const response: IPlumGETResponse = await fetch(SITE_APIS.ADSURE).then(
    async (res) => await res.json()
  );
  return response;
};
/* GET ADSURE data API Function ends */