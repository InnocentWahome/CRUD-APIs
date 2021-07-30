<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articles;

class ArticleController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Articles::orderBy('title', 'DESC')->get();
    }

     /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show(Request $request, $id)
    {
        $article = Articles::find($id);
        return $article;

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newArticle = new Articles;
        $newArticle->title = $request->title;
        $newArticle->body = $request->body;
        $newArticle->save();

        return $newArticle;
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $existingArticle = Articles::find( $id );

        if( $existingArticle ){
            $existingArticle->title = $request->title;
            $existingArticle->body = $request->body;
            $existingArticle->save();
            return $existingArticle;
        }

        return "Article not found";
    }

        /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingArticle = Articles::find( $id );

        if( $existingArticle ){
            $existingArticle->delete();
            return "Article Successfully deleted";
        }

        return "Article not found";
    }
      
}
