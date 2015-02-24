﻿module CIL.Runtime.OpCodes
{
    export class Tail extends OpCode
    {
        number(): number
        {
            return 65044;
        }

        constructor(memory: MemorySystem.Memory, stack: StackFrame[])
        {
            super(memory, stack);
        }
    }

    OpCode.opCodes[Tail.prototype.number()] = <any>Tail;
} 