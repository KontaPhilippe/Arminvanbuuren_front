import { useState } from "react";

import { useAuthValues } from "@/contexts/contextAuth";

import {
  API_BASE_URL,
  API_VERSION,
  DEFAULT_AVATAR_IMAGE,
} from "@/libs/constants";

import { IProfile } from "@/interfaces/IProfile";
import { getAWSSignedURL } from "@/libs/aws";

import { DEFAULT_COUNTRY, ICountry } from "@/interfaces/ICountry";
import { DEFAULT_STATE, IState } from "@/interfaces/IState";
import { ICity } from "@/interfaces/ICity";

const useProfile = () => {
  const { accessToken, user } = useAuthValues();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProfile = async () => {
    setIsLoading(true);

    const response = await fetch(
      `${API_BASE_URL}/${API_VERSION}/profile?id=${user.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const profile = data as IProfile;

      profile.avatarImage = await getAWSSignedURL(
        profile.avatarImage,
        DEFAULT_AVATAR_IMAGE
      );

      setIsLoading(false);
      return profile;
    } else {
      setIsLoading(false);
    }
    return null;
  };

  const updateProfile = async (
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    avatarImageFile: File | null,
    gender: string,
    dob: string,
    address: string,
    countryId: number | null,
    stateId: number | null,
    cityId: number | null,
    zipcode: string,
    planId: number | null
  ) => {
    setIsLoading(true);

    const formData = new FormData();
    if (avatarImageFile) {
      formData.append("avatarImageFile", avatarImageFile);
    }
    if (user.id) formData.append("id", user.id.toString());
    else formData.append("id", "");
    formData.append("username", username.toString());
    formData.append("firstName", firstName.toString());
    formData.append("lastName", lastName.toString());
    formData.append("email", email.toString());
    formData.append("gender", gender.toString());
    formData.append("dob", dob.toString());
    formData.append("address", address.toString());
    if (countryId) formData.append("countryId", countryId.toString());
    else formData.append("countryId", "");
    if (stateId) formData.append("stateId", stateId.toString());
    else formData.append("stateId", "");
    if (cityId) formData.append("cityId", cityId.toString());
    else formData.append("cityId", "");
    formData.append("zipcode", zipcode.toString());
    if (planId) formData.append("planId", planId.toString());
    else formData.append("planId", "");

    const response = await fetch(`${API_BASE_URL}/${API_VERSION}/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const profile = data as IProfile;

      profile.avatarImage = await getAWSSignedURL(
        profile.avatarImage,
        DEFAULT_AVATAR_IMAGE
      );

      setIsLoading(false);
      return profile;
    } else {
      setIsLoading(false);
    }
    return null;
  };

  const fetchCountries = async () => {
    setIsLoading(true);

    const response = await fetch(
      `${API_BASE_URL}/${API_VERSION}/profile/countries`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const countries = data as Array<ICountry>;

      setIsLoading(false);
      return countries;
    } else {
      setIsLoading(false);
    }
    return [];
  };

  const fetchStates = async (countryId: number | null) => {
    if (countryId == DEFAULT_COUNTRY.id) return [];

    setIsLoading(true);

    const response = await fetch(
      `${API_BASE_URL}/${API_VERSION}/profile/states?countryId=${countryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const states = data as Array<IState>;

      setIsLoading(false);
      return states;
    } else {
      setIsLoading(false);
    }
    return [];
  };

  const fetchCities = async (stateId: number | null) => {
    if (stateId == DEFAULT_STATE.id) return [];

    setIsLoading(true);

    const response = await fetch(
      `${API_BASE_URL}/${API_VERSION}/profile/cities?stateId=${stateId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const cities = data as Array<ICity>;

      setIsLoading(false);
      return cities;
    } else {
      setIsLoading(false);
    }
    return [];
  };

  return {
    isLoading,
    fetchProfile,
    updateProfile,
    fetchCountries,
    fetchStates,
    fetchCities,
  };
};

export default useProfile;
