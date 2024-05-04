import { getAuthHeader } from "@/helpers/auth-helper";

const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;

export const getAllAssistantManagerByPage = async (
  page = 0,
  size = 4,
  sort = "name",
  type = "desc"
) => {
  const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

  return fetch(`${API_URL}/admin/getAll?${qs}`, {
    headers: await getAuthHeader(),
  });
};

export const createAssistantManager = async (payload) => {
  return fetch(`${API_URL}/admin/save`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: await getAuthHeader(),
  });
};

export const deleteAssistantManager = async (id) => {
  return fetch(`${API_URL}/admin/delete/${id}`, {
    method: "delete",
    headers: await getAuthHeader(),
  });
};