'use client';

import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Label } from '@/shared/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { LandingPageHeader } from '@/app/_components/landing-page-header';

import { Calendar, Loader2, Check, Home } from 'lucide-react';

import { useSchedule } from './_hooks/useSchedule';
import { countryPhoneCodes } from '@/shared/data/country-phone-codes';

export default function SchedulePage() {
  const {
    t,
    formData,
    errors,
    isLoading,
    isSuccess,
    handleInputChange,
    handleSubmit,
  } = useSchedule();

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <LandingPageHeader />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border shadow-lg text-center">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('scheduleSuccessTitle')}
                </h2>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {t('scheduleSuccessMessage')}
                </p>

                <Link href="/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Home className="mr-2 h-5 w-5" />
                    {t('backToHome')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingPageHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('scheduleTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('scheduleSubtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t('companyInformation')}
                  </h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-foreground">
                        {t('companyName')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="companyName"
                        placeholder={t('companyNamePlaceholder')}
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className={`bg-input border-border ${errors.companyName ? 'border-red-500' : ''}`}
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-sm">{errors.companyName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyAddress" className="text-foreground">
                        {t('companyAddress')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="companyAddress"
                        placeholder={t('companyAddressPlaceholder')}
                        value={formData.companyAddress}
                        onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                        className={`bg-input border-border ${errors.companyAddress ? 'border-red-500' : ''}`}
                      />
                      {errors.companyAddress && (
                        <p className="text-red-500 text-sm">{errors.companyAddress}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t('contactInformation')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firtName" className="text-foreground">
                        {t('firstName')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firtName"
                        placeholder={t('firstNamePlaceholder')}
                        value={formData.firtName}
                        onChange={(e) => handleInputChange('firtName', e.target.value)}
                        className={`bg-input border-border ${errors.firtName ? 'border-red-500' : ''}`}
                      />
                      {errors.firtName && (
                        <p className="text-red-500 text-sm">{errors.firtName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        {t('lastName')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={t('lastNamePlaceholder')}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`bg-input border-border ${errors.lastName ? 'border-red-500' : ''}`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        {t('email')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`bg-input border-border ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-foreground">
                        {t('phoneNumber')} <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.phoneCode}
                          onValueChange={(value) => handleInputChange('phoneCode', value)}
                        >
                          <SelectTrigger className="w-32 bg-input border-border">
                            <SelectValue placeholder={t('selectCountryCode')} />
                          </SelectTrigger>
                          <SelectContent>
                            {countryPhoneCodes.map((country) => (
                              <SelectItem key={country.country} value={country.code}>
                                {country.code} {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder={t('phoneNumberPlaceholder')}
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value.replace(/\D/g, ''))}
                          className={`bg-input border-border flex-1 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t('location')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-foreground">
                        {t('state')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="state"
                        placeholder={t('statePlaceholder')}
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className={`bg-input border-border ${errors.state ? 'border-red-500' : ''}`}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm">{errors.state}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-foreground">
                        {t('city')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        placeholder={t('cityPlaceholder')}
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`bg-input border-border ${errors.city ? 'border-red-500' : ''}`}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="zip" className="text-foreground">
                        {t('zipCode')} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="zip"
                        placeholder={t('zipCodePlaceholder')}
                        value={formData.zip}
                        onChange={(e) => handleInputChange('zip', e.target.value)}
                        className={`bg-input border-border ${errors.zip ? 'border-red-500' : ''}`}
                      />
                      {errors.zip && (
                        <p className="text-red-500 text-sm">{errors.zip}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t('additionalInformation')}
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      {t('message')}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t('messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-input border-border min-h-32"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t('scheduling')}
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        {t('scheduleButton')}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link href="/">
              <Button variant="outline" size="lg">
                <Home className="mr-2 h-5 w-5" />
                {t('backToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
