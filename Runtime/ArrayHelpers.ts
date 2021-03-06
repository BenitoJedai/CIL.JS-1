﻿module CIL.Runtime
{
    "use strict";

    export class ArrayHelpers
    {
        static padInt(bits: boolean[], length: number, extender?: boolean): boolean[]
        {
            var paddedThis: boolean[] = [];
            while (paddedThis.length < length)
            {
                if (paddedThis.length < bits.length)
                {
                    paddedThis.unshift(bits[bits.length - paddedThis.length - 1]);
                }
                else
                {
                    paddedThis.unshift(extender === undefined ? bits[0] : extender);
                }
            }

            return paddedThis;
        }

        static padInverseInt(bits: boolean[], length: number, extender?: boolean): boolean[]
        {
            var paddedThis: boolean[] = [];
            while (paddedThis.length < length)
            {
                if (paddedThis.length < bits.length)
                {
                    paddedThis.unshift(!bits[bits.length - paddedThis.length - 1]);
                }
                else
                {
                    paddedThis.unshift(extender === undefined ? !bits[0] : extender);
                }
            }

            return paddedThis;
        }
    }
}