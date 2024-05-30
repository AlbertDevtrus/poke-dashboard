"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne,
} from "@/app/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value: number;
}

interface CounterResponse {
  count: number;
}

const getAPICounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((response) => response.json());

  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAPICounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +
        </button>
      </div>
    </>
  );
};
