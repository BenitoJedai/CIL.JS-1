﻿module CIL.Runtime.OpCodes
{
    "use strict";

    export class AddOvfUn extends AddOvf
    {
        number(): number
        {
            return 215;
        }

        constructor(memory: MemorySystem.IMemoryManger, stack: StackFrame[])
        {
            super(memory, stack);
        }
    }

    OpCode.opCodes[AddOvfUn.prototype.number()] = <any>AddOvfUn;
} 