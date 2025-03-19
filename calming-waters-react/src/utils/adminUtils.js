export const isAdminUser = (userId) => {
  const adminUserIds = process.env.REACT_APP_ADMIN_USER_IDS?.split(',') || [];
  return adminUserIds.includes(userId);
}; 