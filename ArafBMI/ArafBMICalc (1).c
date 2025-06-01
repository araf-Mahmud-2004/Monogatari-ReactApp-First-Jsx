#include<stdio.h>

int main()
{
    double weight, ft, inc, height, bmi;
    printf("Araf says enter your weight (in kg)=");
    scanf("%lf",&weight);

    printf("Araf says enter your height(like this '5ft7')=");
    scanf("%lfft%lf", &ft, &inc);
    height=(ft/3.28)+(inc/39.37);

    bmi = weight/(height*height);
    printf("Your BMI is= %.5lf\n",bmi);
    if (bmi<=18.5)
    {
        printf("Araf says you are Underweight\n");
    }
    else if (bmi>18.5 && bmi<=25)
    {
        printf("Araf says you are Healthy weight range\n");
    }
    else if (bmi>25 && bmi<=30)
    {
        printf("Araf says you are Overweight range\n");
    }
    else if (bmi>30)
    {
        printf("Araf says you are Obesity range\n");
    }
    
}