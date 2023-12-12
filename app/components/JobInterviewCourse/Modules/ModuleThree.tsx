import React from 'react'

const ModuleThree = () => {
  return (
    <div className="flex items-start justify-start flex-col pt-0 lg:pt-0 md:pt-10 mb-[60px] md:mb-0">
      <div className="w-[305px] h-[57px] pb-3 border-b border-neutral-100 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-[9px] flex">
          <div className="text-neutral-700 text-base font-medium font-['Inter']">
            Sell Yourself Like a Pro - 1
          </div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="w-3.5 h-3.5 relative" />
          <div className="text-neutral-700 text-sm w-max font-medium font-['Inter']">
            6 topics
          </div>
        </div>
      </div>
      <div className="w-[286px] h-[335px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-700 text-sm font-medium font-['Inter']">
            Description:
          </div>
          <div className="w-[300px] h-max text-neutral-400 text-justify text-sm font-medium font-['Inter'] leading-tight">
            You are the hero of your own story and we teach you how to tell your
            story and become the most memorable candidate for the role.
          </div>
        </div>

        <div className="h-max w-full p-3 rounded-lg border border-red-200 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              Introduction
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              Sell yourself exceptionally well
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              Situation-based questions
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              The four (4) major questions
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              The Ultimate and Unspoken question
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
            <div className="text-neutral-700 text-sm font-medium font-['Inter']">
              How to craft your story
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleThree
