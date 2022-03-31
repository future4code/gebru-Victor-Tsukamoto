export const goToListTripsPage = (navigate) => {
    navigate('/trips/list')
  }
  
  export const goToLoginPage = (navigate) => {
    navigate('/login')
  }
  
  export const goToApplicationFormPage = (navigate) => {
    navigate('/trips/application')
  }
  
  export const goToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
  }
  
  export const goToTripDetailsPage = (navigate) => {
    navigate('/admin/trips/:id')
  }
  
  export const goToAdminCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
  }
  
  export const goBack = (navigate) => {
    navigate(-1)
  }