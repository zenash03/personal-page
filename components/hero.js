import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { CustomBentoGrid, CustomBentoCard } from './custom/custom-bento-grid'
import { siteConfig } from '@/constants'
import { fontSans } from '@/config/fonts'
import { subtitle, title } from '@/constants/primitives'
import { BentoCard, Bento } from './magicui/bento-grid'

const bentoContents = siteConfig.contents.home.features; 

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-center gap-x-8 gap-y-6">
      

      <CustomBentoGrid className="lg:grid-rows-2 py-12">
        {
          bentoContents.map((feature) => (
            <CustomBentoCard key={feature.name} {...feature} />
          ))
        }
      </CustomBentoGrid>
    </div>
  )
}

export default Hero