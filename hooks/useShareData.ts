import { useState, useEffect } from "react";

import useAudioPlayer from "@/hooks/useAudioplayer";

import { useAuthValues } from "@/contexts/contextAuth";

import useMusic from "@/hooks/useMusic";
import useTransaction from "@/hooks/useTransaction";

import {
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  STRIPE_PUBLICK_API_KEY,
  STRIPE_SECRET_KEY,
} from "@/libs/constants";

import { DEFAULT_SHAREDATA, IShareData } from "@/interfaces/IShareData";

const useShareData = () => {
  const { isSignedIn } = useAuthValues();
  const { fetchMusics } = useMusic();
  const { fetchPaymentData } = useTransaction();

  const audioPlayer = useAudioPlayer();

  const [isLyricsVisible, setIsLyricsVisible] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<any>(null);

  const [isMetaVisible, setIsMetaVisible] = useState<boolean>(false);
  const [metaData, setMetaData] = useState<any>(null);

  const [isLivestreamCommentVisible, setIsLivestreamCommentVisible] =
    useState<boolean>(false);

  const [isDonationModalVisible, setIsDonationModalVisible] =
    useState<boolean>(false);
  const [isSubscriptionModalVisible, setIsSubscriptionModalVisible] =
    useState<boolean>(false);
  const [isViewExclusiveModalVisible, setIsViewExclusiveModalVisible] =
    useState<boolean>(false);

  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);

  const [paypalClientId, setPaypalClientId] =
    useState<string>(PAYPAL_CLIENT_ID);
  const [paypalClientSecret, setPaypalClientSecret] =
    useState<string>(PAYPAL_CLIENT_SECRET);
  const [stripePublicApiKey, setStripePublicApiKey] = useState<string>(
    STRIPE_PUBLICK_API_KEY
  );
  const [stripeSecretKey, setStripeSecretKey] =
    useState<string>(STRIPE_SECRET_KEY);

  const [shareData, setShareData] = useState<IShareData>(DEFAULT_SHAREDATA);

  useEffect(() => {
    if (isSignedIn) {
      fetchMusics(1, false).then((value) => {
        if (value.musics.length > 0) {
          audioPlayer.setMusics(value.musics);
        }
      });

      fetchPaymentData().then((data) => {
        if (data) {
          setPaypalClientId(
            !data.paypalClientId || data.paypalClientId == "PAYPAL_CLIENT_ID"
              ? PAYPAL_CLIENT_ID
              : data.paypalClientId
          );
          setPaypalClientSecret(
            !data.paypalClientSecret ||
              data.paypalClientSecret == "PAYPAL_CLIENT_SECRET"
              ? PAYPAL_CLIENT_SECRET
              : data.paypalClientSecret
          );
          setStripePublicApiKey(
            !data.stripePublicApiKey ||
              data.stripePublicApiKey == "STRIPE_PUBLIC_API_KEY"
              ? STRIPE_PUBLICK_API_KEY
              : data.stripePublicApiKey
          );
          setStripeSecretKey(
            !data.stripeSecretKey || data.stripeSecretKey == "STRIPE_SECRET_KEY"
              ? STRIPE_SECRET_KEY
              : data.stripeSecretKey
          );
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  return {
    audioPlayer,
    isLyricsVisible,
    setIsLyricsVisible,
    lyrics,
    setLyrics,
    isMetaVisible,
    setIsMetaVisible,
    metaData,
    setMetaData,
    isDonationModalVisible,
    setIsDonationModalVisible,
    isSubscriptionModalVisible,
    setIsSubscriptionModalVisible,
    isViewExclusiveModalVisible,
    setIsViewExclusiveModalVisible,
    isLivestreamCommentVisible,
    setIsLivestreamCommentVisible,
    isShareModalVisible,
    setIsShareModalVisible,
    shareData,
    setShareData,
    paypalClientId,
    paypalClientSecret,
    stripePublicApiKey,
    stripeSecretKey,
  };
};

export default useShareData;