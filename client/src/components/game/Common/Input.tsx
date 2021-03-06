import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  StyledCursor,
  StyledCursorWrapper,
} from "../../../styles/commonStyles";

//redux action uses ActionCreatorWithPayload<any, string> because I cant figure out how
//to union ActionCreatorWithPayload<number, string> and ActionCreatorWithPayload<string, string>
interface InputPropsType {
  gameFunction: (key: string) => Promise<any>;
  reduxAction: ActionCreatorWithPayload<any, string>;
  allowableKeys?: string[];
}

/**
 *
 * gameFunction:function to call on server
 * reduxAction: action to store function return in redux store
 * allowableKeys: keys that will send request, if this is not supplied all keys will accepted to send request
 *
 * @returns void
 */
const Input = ({
  gameFunction,
  reduxAction,
  allowableKeys,
}: InputPropsType) => {
  const dispatch = useAppDispatch();
  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (
        allowableKeys === undefined ||
        allowableKeys.find((allowableKey) => allowableKey === e.key)
      ) {
        document.body.removeEventListener("keydown", handleKeyDown);
        e.preventDefault();
        e.stopPropagation();
        if (!e.repeat) {
          const gameFunctionReturn = await gameFunction(e.key);
          dispatch(reduxAction(gameFunctionReturn));
        }
      }
    },
    [allowableKeys, dispatch, gameFunction, reduxAction]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <StyledCursorWrapper>
      <span>{">"}</span>
      <StyledCursor>{"_"}</StyledCursor>
    </StyledCursorWrapper>
  );
};

export default memo(Input);
