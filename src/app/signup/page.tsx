'use client';

// * NextJS
import Link from 'next/link';
import Image from 'next/image'

// * Components
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { LanguageSwitcher } from '@/shared/components/LanguageSwitcher';

// * Icons
import { Eye, EyeOff } from 'lucide-react';
import VehicleSalesLogo from "@/shared/assets/icon.png";

// * MVVM
import { useSignUp } from './_hooks/useSignUp';

export default function SignUp() {
  const {
    t,
    handleSubmit,
    formData,
    handleChange,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
  } = useSignUp()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <Card className="w-full max-w-md bg-card border-border max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image src={VehicleSalesLogo} alt="Vehicle Sales Logo" className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            {t('registerTitle')}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {t('createYourAccount')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">
                  {t('firstName')}
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder={t('firstName')}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">
                  {t('lastName')}
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder={t('lastName')}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                {t('username')}
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder={t('chooseUsername')}
                value={formData.username}
                onChange={handleChange}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                {t('email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('enterEmail')}
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-foreground">
                {t('dateOfBirth')}
              </Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                {t('password')}
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('createPassword')}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters with uppercase, lowercase, and numbers
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                {t('confirmPassword')}
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder={t('confirmPassword')}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : t('signUp')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {t('alreadyHaveAccount')}{' '}
              <Link href="/signin" className="text-primary hover:underline">
                {t('signIn')}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}