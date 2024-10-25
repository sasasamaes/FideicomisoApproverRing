import retrofit2.Call
import retrofit2.http.GET

interface FideicomisoApi {
    @GET("/api/fideicomisos")
    fun getFideicomisos(): Call<List<Fideicomiso>>
}