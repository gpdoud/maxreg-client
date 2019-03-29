export class Event
{
id: number;
title: string;
date: string;
description: string;

constructor(title: string, date: string, description: string)
{
    this.id = 0;
    this.title = title;
    this.date = date;
    this.description = description;

}

}