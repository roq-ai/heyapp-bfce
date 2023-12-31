interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'Admin'],
  tenantName: 'Company',
  applicationName: 'HeyApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
